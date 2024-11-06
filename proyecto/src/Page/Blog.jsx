import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagenesLibrary from './ImagenesLibrary';
import fondoImage from '../assets/img/Fondo2.png';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('foro');
  const [posts, setPosts] = useState([]); // Guardar publicaciones
  const [newPost, setNewPost] = useState(''); // Entrada de nueva publicación
  const [newComments, setNewComments] = useState({}); // Comentarios de las publicaciones
  const [apodData, setApodData] = useState(null);
  const API_KEY = 'cbbmg6jArmH4JHY9gW3O237eIYpHfwLeWjQqMvwd';

  useEffect(() => {
    // Cargar publicaciones guardadas desde localStorage
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);

    // Obtener la imagen del día de la NASA
    const fetchApodData = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        setApodData(response.data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchApodData();
  }, []);

  useEffect(() => {
    // Guardar publicaciones en localStorage cada vez que se actualicen
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const newPostObj = { text: newPost, comments: [] };
      setPosts([newPostObj, ...posts]); // Añadir la nueva publicación al principio
      setNewPost(''); // Limpiar el campo de entrada
    }
  };

  const handlePostDelete = (postIndex) => {
    const updatedPosts = posts.filter((_, index) => index !== postIndex);
    setPosts(updatedPosts); // Actualizar publicaciones después de eliminar
  };

  const handleCommentChange = (postIndex, value) => {
    setNewComments((prev) => ({
      ...prev,
      [postIndex]: value,
    }));
  };

  const handleCommentSubmit = (postIndex, e) => {
    if (e.key === 'Enter' && newComments[postIndex]?.trim()) {
      e.preventDefault();
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(newComments[postIndex]);
      setPosts(updatedPosts);
      handleCommentChange(postIndex, ''); // Limpiar el comentario
    }
  };

  const handleCommentDelete = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.splice(commentIndex, 1); // Eliminar el comentario
    setPosts(updatedPosts);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'foro':
        return (
          <div>
            {/* Título del Foro */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Foro de dudas e inquietudes</h2>

            {/* Formulario para la nueva publicación */}
            <form onSubmit={handleSubmitPost} className="mt-4">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Escribe tu mensaje en el foro..."
                className="w-full p-3 border rounded text-black text-lg"
                rows="4"
              />
              <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded text-lg">
                Enviar
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Publicaciones</h3>
              {posts.length === 0 ? (
                <p className="text-white">No hay publicaciones aún.</p>
              ) : (
                posts.map((post, postIndex) => (
                  <div key={postIndex} className="border-b py-2">
                    <div className="text-white text-lg">{post.text}</div>

                    {/* Formulario de comentarios */}
                    <form className="mt-2">
                      <input
                        type="text"
                        value={newComments[postIndex] || ''}
                        onChange={(e) => handleCommentChange(postIndex, e.target.value)}
                        onKeyDown={(e) => handleCommentSubmit(postIndex, e)}
                        placeholder="Escribe un comentario..."
                        className="w-full p-2 border rounded text-black text-lg"
                      />
                    </form>

                    {/* Mostrar comentarios */}
                    <div className="mt-2">
                      {post.comments.length === 0 ? (
                        <p className="text-white">No hay comentarios.</p>
                      ) : (
                        post.comments.map((comment, commentIndex) => (
                          <div key={commentIndex} className="flex justify-between mt-1">
                            <span className="text-white">{comment}</span>
                            <button
                              onClick={() => handleCommentDelete(postIndex, commentIndex)}
                              className="text-red-500 hover:underline"
                            >
                              Eliminar
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Botón para eliminar la publicación */}
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handlePostDelete(postIndex)}
                        className="text-red-500 hover:underline"
                      >
                        Eliminar Publicación
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );

      case 'imagenDelDia':
        return (
          <div>
            {apodData && (
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-blue-600 text-center">
                  Hoy en el Universo: La Imagen del Día
                </h3>
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="mt-4 w-3/4 rounded mx-auto shadow-lg"
                />
                <p className="mt-4 text-center text-white">{apodData.explanation}</p>
              </div>
            )}
          </div>
        );

      case 'galeria':
        return (
          <div className="text-white">
            <ImagenesLibrary />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="w-full h-full p-4"
      style={{
        backgroundImage: `url(${fondoImage})`, // Imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Capa opaca sobre la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-[#003b5c] text-white p-4 w-full">
          <div className="text-2xl font-bold text-white">El Observatorio Digital</div>

          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('foro')}
              className={`p-2 text-white font-bold ${activeTab === 'foro' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors duration-300`}
            >
              Foro
            </button>
            <button
              onClick={() => setActiveTab('imagenDelDia')}
              className={`p-2 text-white font-bold ${activeTab === 'imagenDelDia' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors duration-300`}
            >
              Imagen del Día
            </button>
            <button
              onClick={() => setActiveTab('galeria')}
              className={`p-2 text-white font-bold ${activeTab === 'galeria' ? 'text-yellow-500' : 'hover:text-yellow-500'} transition-colors duration-300`}
            >
              Galería de Imágenes
            </button>
          </div>
        </div>

        {/* Renderizo contenido según la pestaña activa */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Blog;
