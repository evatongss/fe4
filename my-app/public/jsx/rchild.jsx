const Rchild = ({ id, content }) => {
  return (
    <>
      <div>
        <h1>Hello</h1>    
        <p id={`${id}-1`}>{content}</p>
      </div>   
      <div>
        <h1>Hello</h1>    
        <p id={`${id}-2`}>{content}</p>
      </div>  
    </>
  );    
};