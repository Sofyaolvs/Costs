import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

//hooks do react 
import { useEffect, useState } from 'react'

//definindo o projectform 
function ProjectForm({ handleSubmit, btnText, projectData}) {
    //estados locais para aramzenar categorias e dados
    const [categories, setCategories] =useState([])
    const [project, setProject] =useState(projectData || {})

    //useEffect para carregar as categorias quando o componente for montado
    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method:'GET',
        headers: {
            'Content-Type':'application.json'
        }
        
    })
    //converte a resp da api para JSON
    .then((resp)=> resp.json())
    //atualiza o estado das categorias com os dados recebidos da api
    .then((data)=>{
        setCategories(data)
    })
    .catch((err)=> console.log(err)) //trata erros caso aconteçam
    }, [])

    const submit= (e) =>{
        e.preventDefault()
        handleSubmit(project)

    }
    function handleChange(e){
        setProject({ ...project,[e.target.name]: e.target.value})
     
    }
    function handleCategory(e){
        setProject({
            ...project,
            category:{
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text
        }})
       
    }
    return  (
    
    <form onSubmit={submit} className={styles.form}>
        
            <Input 
            type='text'
            text='Nome do Projeto'
            name='name'
            placeholder='Insira o nome do Projeto'
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />

            <Input 
            type='number'
            text='Orçamento do Projeto'
            name='budget'
            placeholder='Insira o Orçamento total'
            handleOnChange={handleChange}
            value={project.budget  ? project.budget : ''}
            />
      
        
        
            <Select 
            name='category_id' 
            text='Selecione a categoria' 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id :''}
            />
        <SubmitButton text={btnText}/>
    </form>
     )
}

export default ProjectForm