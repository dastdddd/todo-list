import React from 'react';
import { useForm } from 'react-hook-form';

const Submit = ({addList}) => {
  const {register, handleSubmit, reset } = useForm();
  const onSubmit = (form) => {
    addList(form)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <input {...register('listName', { required: true })} type="text" placeholder='Напиши что нибуть...'/>
      <button type='submit'>Добавить лист</button>
    </form>
  );
};

export default Submit;