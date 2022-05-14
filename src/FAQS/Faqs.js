import React from 'react'
import FaqsData from './Data'
import Faq from './Faq'
import style from './faqs.module.css'
const Faqs = () => {
    
  return (
    <main className={style.container}>
    <div className={style.faqs}>
    <h2 className={{textAlign:'center'}}>Faqs</h2>
    
        {FaqsData.map(faq=><Faq key={faq.id} {...faq} />)}
    </div>
    </main>
  )
}

export default Faqs