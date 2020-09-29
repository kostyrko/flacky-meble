import React, { useEffect, useState } from "react";

const ContactForm = ({data}) => {
  const [addInfo, setAddInfo] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let temp = []
    Object.keys(data).forEach(elem=> {
      // console.log('cotact elem', elem);
      const {num,price,lining,dimensions,upperUnits,lowerUnits} = data[elem]
      console.log('log elem', num,price,lining,dimensions,upperUnits,lowerUnits);
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
    console.log('submitted')
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
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  // console.log('status', status);
  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mwkwpbjl"
      method="POST"
    > 
      
      <label>Email:</label>
      <input type="email" name="email" />
        
      <label htmlFor="textArea">Proszę wpisać dodatkowe uwagi</label>
      <textarea
        name="textArea"
        className="project-summery"
        value={addInfo}
        onChange={(e) => setAddInfo(e.target.value)}
      />
      <textarea
        name="textArea"
        className="project-summery2"
        defaultValue={projectInfo}
        // onChange={(e) => setAddInfo(e.target.value)}
        
      />
      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
};

export default ContactForm;



