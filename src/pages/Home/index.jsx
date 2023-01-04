import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

import { ButtonText } from '../../components/ButtonText'

export function Home() {
  // estado para armazenar a pesquisa
  const [search, setSearch] = useState("");
  // estado para armazenar as tags
  const [tags, setTags] = useState([]);
  // estado para armazenar as tags selecionadas
  const [tagsSelected, setTagsSelected] = useState([]);
  // estado para armazenar as notas
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate()

  // function de marcar e desmarcar tags
  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)

    }else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  // function para exibir os detalhes da nota selecionada
  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);



  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li>
          <ButtonText 
          title='Todos' 
          onClick={() => handleTagSelected("all")}
          isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name} 
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>

          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder= "Pesquisar pelo título" 
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            )) 
          }
        </Section>
        
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}