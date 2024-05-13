import React from 'react'

export const Layout = (props) => {
  return (
    <>
      <section className='bg-primary mx-auto px-8 pt-10'>
        {props.children}
      </section>
    </>
  )
}