const Mensaje = (params) => {
    console.log(params)
    return (<h1>{params.msg}
                {params.fecha}
            </h1>
    );
  }

  export default Mensaje