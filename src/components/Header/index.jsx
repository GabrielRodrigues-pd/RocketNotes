// Icon imported from React-icons
import { useNavigate } from 'react-router-dom';

import { RiShutDownLine } from 'react-icons/ri'
import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api';

// Components import
import { Container, Profile, Logout } from "./styles";

export function Header() {
   const {signOut, user} = useAuth()
   const navigate = useNavigate()

   function handleSignOut(){
      navigate("/")
      signOut();
   }

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


   return( 
    <Container>

      {/* Div user */}
      <Profile to="/profile">
         <img src={avatarUrl} 
         alt="imagem do usuário" />
         
         <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
         </div>
      </Profile>

      {/* Icon */}
      <Logout onClick={handleSignOut}>
         <RiShutDownLine/>
      </Logout>
    </Container>
   )
}