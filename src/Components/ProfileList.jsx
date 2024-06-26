import {useState,useEffect} from 'react'
import profileList from '../profiles.json';
import {PersonProfile} from './PersonProfile';
import '../StyleSheet/ProfileList.css'

export function ProfileList(){
  const [profiles,setProfiles] = useState([]);
  useEffect(()=>{
    setProfiles(profileList.sort(()=> Math.random() - .5 ).slice(0,7));
  },[]);

  function deleteProfile (id){
    const idProfile = profiles.findIndex(profile=> profile.id === id);
    const newProfiles = [...profiles];
    newProfiles.splice(idProfile,1);
    setProfiles([...newProfiles])
  }

  return(
    <section className="profiles">
      <h1>Hola Mundo</h1>
      {profiles.length>0?(
        <ul className="profile-list">
        {profiles.map(person=>{
          return(
            <PersonProfile
              name={person.name}
              country={person.country}
              job={person.job}
              workPlace={person.workPlace}
              key={person.id}
              id = {person.id}
              deleteProfile = {deleteProfile}>
              {person.quote}
             </PersonProfile>
          )
        })}
      </ul>
      ):(<p>No hay perfiles cargados</p>)}
      </section>
  )


}