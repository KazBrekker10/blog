export function PersonProfile({name,country,job,workPlace,quote,id,deleteProfile,children}){
    return(
      <article className="profile-item">
          <div className="image-container">
            <img src={`https://this-person-does-not-exist.com/img/avatar-gen${id}.jpg`} alt={`foto de ${name}`}/>
          </div> 
          <div className="info-container">
             <h2><strong>{name}</strong> en {country}</h2>
             <h3>{job} en <strong>{workPlace}</strong></h3>
             <q>{children}</q>
          </div>
          <button onClick={()=>{
            deleteProfile(id)
          } } className='btn-close'>❌</button>
        </article>
    )
  }