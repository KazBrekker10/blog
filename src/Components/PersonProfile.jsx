export function PersonProfile({name,country,job,workPlace,quote,id,deleteProfile}){
    return(
      <article>
          <div className="image-container">
            <img src={`https://this-person-does-not-exist.com/img/avatar-gen${id}.jpg`}/>
          </div> 
          <div className="info-container">
             <h2><strong>{name}</strong> en {country}</h2>
             <h3>{job} en <strong>{workPlace}</strong></h3>
             <q>{quote}</q>
          </div>
          <button onClick={()=>{
            deleteProfile(id)
          } } className='btn-close'>❌</button>
        </article>
    )
  }