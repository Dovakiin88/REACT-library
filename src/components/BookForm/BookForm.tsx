import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseauthor, choosetitle, choosegenre, chooseisbn, choosecopies } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface BookFormProps{
  id?:string;
  data?:{}
}

interface BookState{
  author: string;
  title: string;
  genre: string;
  isbn: string;
  copies: string;
};

export const BookForm = (props:BookFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const author = useSelector<BookState>(state => state.author)
  const { register, handleSubmit} = useForm({})

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    }else{
      dispatch(chooseauthor(data.author));
      dispatch(choosetitle(data.title));
      dispatch(choosegenre(data.genre));
      dispatch(chooseisbn(data.isbn));
      dispatch(choosecopies(data.copies))
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Text Name</label>
          <Input {...register('title')} name='title' placeholder='Book Title'/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='class' placeholder='Author'/>
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder='Genre'/>
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder='ISBN?'/>
        </div>
        <div>
          <label htmlFor="opies">Copies</label>
          <Input {...register('copies')} name='copies' placeholder='# of Copies?'/>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}