import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagenesLibrary from './ImagenesLibrary';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('foro');
  const [posts, setPosts] = useState([]); // Guardar publicaciones
  const [newPost, setNewPost] = useState(''); // Entrada de nueva publicación
  const [newComments, setNewComments] = useState({}); // Comentarios de las publicaciones
  const [apodData, setApodData] = useState(null);
  const API_KEY = 'cbbmg6jArmH4JHY9gW3O237eIYpHfwLeWjQqMvwd';

  useEffect(() => {
    // Cargar publicaciones y comentarios desde localStorage
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
    // Guardar publicaciones y comentarios en localStorage cada vez que se actualicen
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
            <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-center">Foro de dudas e Inquietudes</h1>
            <h2 className="text-xl font-semibold text-white text-center mt-4">
              ¿Hay algo que no entiendes del espacio o la ciencia? ¡Déjanos ayudarte a descubrirlo y aprender juntos en este foro!
            </h2>
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
                    {/* Publicación en negrita */}
                    <div className="text-white text-lg font-bold">{post.text}</div>
                    
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

                    <div className="mt-4"> {/* Espaciado entre comentarios */}
                      {post.comments.length === 0 ? (
                        <p className="text-white">No hay comentarios.</p>
                      ) : (
                        post.comments.map((comment, commentIndex) => (
                          <div key={commentIndex} className="flex justify-between mt-3">
                            {/* Comentarios con texto normal y espaciado */}
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
          <div className="text-white">
            {apodData && (
              <div className="mt-6">
                <h3 className="text-4xl font-extrabold text-yellow-400 text-center">{apodData.title}</h3>
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="mt-4 w-11/12 mx-auto rounded-lg shadow-lg"
                />
                <p className="mt-4 text-xl text-center">{apodData.explanation}</p>
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
        backgroundImage: 'linear-gradient(to bottom, #003b5c, #001f2d)', // Degradado de azules oscuros
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
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

        {renderTabContent()}
      </div>
    </div>
  );
};

export default Blog;
