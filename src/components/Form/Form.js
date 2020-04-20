import React from 'react'
import './Form.scss'
//import useFormHook from '../Hooks/CustomFormHook';

/**
 * 
 * @param {
 * } param0 
 * 
 * checkeo de datos de autorizacion...
 */

const Form = ({ 
    signUpForm,
    signInForm,
    twitForm,
    settings,
    handleSubmit,
    handleInputChange,
    inputs
    }) => {
    
        return (
            <div className='form--container'>

                    {signUpForm && (
                        <div className="signUp--form">
                          <h2>Registro</h2>
                            <form onSubmit={handleSubmit} name="registro-form">
                                <div>
                                    <label>Nombre</label>
                                    <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName || ''} required/>
                                </div>
                                <div>
                                    <label >Apellido</label>
                                    <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName || ''} required/>
                                </div>
                                <div>
                                    <label>Email </label>
                                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email || ''} required/>
                                </div>
                                <div>
                                    <label >Password</label>
                                    <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''} required/>
                                </div>
                                <div>
                                    <label>Confirmar password</label>
                                    <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2 || ''} required/>
                                </div>
                                <button type="submit" >Enviar</button>
                            </form>
                        </div>
                       )}
            
                          {signInForm && (
                            <div className="signIn--form">
                              <h2>Iniciar Sesión</h2>
                                <form onSubmit={handleSubmit} name="login-form">
                                    <div>
                                        <label>Email </label>
                                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email || ''} required />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''} required/>
                                    </div>
                                    <button type="submit">Entrar</button>
                               </form>
                            </div>
                          )}

                          {twitForm &&(
                            <div>
                           
                              <label>Opína sin saber aquí...</label>
                            
                                 <form onSubmit={handleSubmit} name="twit-form">
                                   
                                     <div>
                                        <textarea 
                                            type="text" 
                                            name="twit" 
                                            onChange={handleInputChange} 
                                            value={inputs.twit || ''} 
                                            placeholder={`En qué estás pensando?...`}/>
                                    </div>
                                 <br/>
                                
                                   <button type="submit">Crear Tweet</button>
                 
                                 </form>

                             </div>
                          )}

                          {settings && (
                            <div>
                                 <label>Configura tu perfil</label>
                                 <form onSubmit={handleSubmit} name="settings-form">
                                    <div>
                                        <label>Nombre</label>
                                        <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName || ''} required/>
                                    </div>
                                    <div>
                                        <label >Apellido</label>
                                        <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName || ''} required/>
                                    </div>
                                    <div>
                                        <label>Email </label>
                                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email || ''} required/>
                                    </div>
                                     <div>
                                        <label>Description Bio</label>
                                        <textarea 
                                           type="text"
                                           name="setDescription"
                                           onChange={handleInputChange} 
                                           value={inputs.setDescription || ''}
                                           placeholder="bio..."
                                        />
                                     </div>
                                     <div>
                                        <label>Imagen</label>
                                        <input 
                                           type="file" 
                                           onChange={handleInputChange} 
                                           name="img"
                                           value={inputs.img || ''}
                                         />
                                     </div>
                                     <button type="submit">Guardar Cambios</button>
                                 </form>
                            </div>
                          )}
           
                 </div>
         )
      }

export default Form
