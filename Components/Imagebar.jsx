import React, { useState, useEffect } from 'react';

const Imagebar = () => {

  // const data={name:"placeholder",
  //   Photographer:"placeholder",
  //   height:"placeholder",
  //   width:"placeholder",
  //   };
  const [url, setUrl] = useState('');
  const [height, setHeight] = useState('');
  const [description, setDescription] = useState('');
  const [width, setWidth] = useState('');
  const [artist, setArtist] = useState('');


  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random/?client_id=l4ja8DtsrIJI0Qq0ouXB3t64l6W_ZlvywAuMFVRgFVg")
      .then(res => res.json())
      .then(data => {
        setUrl(data.urls.regular);
        setHeight(data.height);
        setDescription(data.alt_description)
        setArtist(data.user.first_name)
        setWidth(data.width)
        console.log(data)
      })
      .catch(err => console.error(err));
  }, []);
  // let a=fetch("https://cat-fact.herokuapp.com/facts")
  console.log(a)

  return (
    
    
    <div className='flex m-4 max-w-screen min-w-[70%] bg-slate-900/90 rounded-4xl shadow-slate-600'>
    
    <div className='max-h-[{height}] m-2 max-w-[50%] rounded-4xl '>
{console.log(height)}
      {url ? <img className="float-left min-w-screen object-scale-down max-h-screen rounded-4xl object-center " src={url} alt="Random from Unsplash" /> : "Loading..."}
    </div>
     <div className='relative self-baseline-last z-10 text-center max-h-80  m- p-2 rounded-4xl bg-slate-800/90'>
      <p className="font-serif text-3xl  mt-8 ml-6 text-slate-100/70">Description<p className='text-xl'>{description}</p></p>
      <p className='bg-zinc-100/10 ml-4 mb-2 mr-4 rounded-4xl min-h-10 items-center hover:bg-slate-100/10 hover:scale-105 flex justify-center text-xl text-zinc-400'>Artist : <p className=' ml-2 text-zinc'> {artist}</p></p>
      <p className='bg-zinc-100/10 ml-4 mb-2 mr-4 rounded-4xl min-h-10 items-center hover:bg-slate-100/10 hover:scale-105 flex justify-center text-xl text-zinc-400'>Width : <p className=' ml-2 text-zinc'> {width}</p></p>
      <p className='bg-zinc-100/10 ml-4 mb-2 mr-4 rounded-4xl min-h-10 items-center hover:bg-slate-100/10 hover:scale-105 flex justify-center text-xl text-zinc-400'>Height : <p className=' ml-2 text-zinc'> {height}</p></p>

    </div>
    </div>
    
  );
};

export default Imagebar;
