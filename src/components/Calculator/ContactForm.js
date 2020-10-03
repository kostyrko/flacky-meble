import React, { useEffect, useState } from "react";

const ContactForm = ({data}) => {
  const [addInfo, setAddInfo] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let temp = []
    Object.keys(data).forEach(elem=> {
      const {num,price,lining,dimensions,upperUnits,lowerUnits} = data[elem]
      // console.log('log elem', num,price,lining,dimensions,upperUnits,lowerUnits);
      let upper = []
      let lower = []
      if(upperUnits) {
        Object.keys(upperUnits).forEach(elem=> {
          const {id,name,width,price}=upperUnits[elem]
          upper.push(` Nr. ${id} - ${name} / szerokość: ${width} / cena: ${price}pln `)
        })
      }
      if(lowerUnits) {
        Object.keys(lowerUnits).forEach(elem=> {
          const {id,name,width,price}=lowerUnits[elem]
          lower.push(` Nr. ${id} - ${name} / szerokość: ${width} / cena: ${price} pln`)
        })
      }
      temp.push(`
>>Ściana nr ${num}<<

przewidywany koszt ${price} pln 

rodzaj frontu: ${lining}

--Szafki wiszące--
${upper}

--Szafki stojące--
${lower}

Informacje dodatkowe:
wymiary ściany - długość ${dimensions.width}, wysokość ${dimensions.height}

----------------------------
      `)
    })    
    setProjectInfo([...temp].join(" "))
  }, [data]);

  const submitForm=(e)=> {
    e.preventDefault();
    console.log('clicked')
    if (email.length < 6 || email.indexOf('@') === -1) {
      setErrors([...errors, 'Email musi być podany mieć przynajmniej 7 znaków i posiadać -> @'])}
    else {
      // empty errors Arr
      setErrors([])
      const form = e.target;
      console.log(form);
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      };
      xhr.send(data);
    }
    
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mwkwpbjl"
      method="POST"
    > 
      <div className="validation">
        {
          errors.length > 0 &&
          errors.map((elem,i)=>
            <p key={i}>{elem}</p>
          )
        }
      </div>
      <label>Email:</label>
      <input type="email" name="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        
      <label htmlFor="textArea">Tu można wpisać dodatkowe uwagi lub dane kontaktowe</label>
      <textarea
        name="textArea"
        className="project-summery"
        value={addInfo}
        onChange={(e) => setAddInfo(e.target.value)}
      />
      <textarea
        name="textArea"
        className="project-summery2"
        value={projectInfo}
      />
      {status === "SUCCESS" ? <p className="feedback-inf">Dziękujemy za przesłanie projektu &#9786;</p> : <button className="submit-project">Przesyłam swój projekt i proszę o kontakt</button>}
      {status === "ERROR" && <p> Ups! Coś poszło nie tak &#9785; </p>}
    </form>
  );
};

export default ContactForm;



