import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/funcionesAdmin.css'
import { BsWrenchAdjustable } from "react-icons/bs";
import { MdCreateNewFolder,MdDelete } from "react-icons/md";
import { FaUserAlt, FaUserTie } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import InfoClientes from "../components/InfoClientes"
import InfoUsuario from "./InfoUsuario";

interface IMoto {
    _id?: string;
    nombre: string;
    marca: string;
    modelo: string;
    descripcion: string;
    año: string;
    cilindraje: string;
    precio: number;
    imagen: string;
}

export default function FuncionesAdmin() {
    const [motos, setMotos] = useState<IMoto[]>([]);
    const [dataForm, setDataForm] = useState<IMoto>({
        nombre: "",
        marca: "",
        modelo: "",
        descripcion: "",
        año: "",
        cilindraje: "",
        precio: 0,
        imagen: "",
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [showUsers,setshowUsers] = useState<boolean>(false)
    const [showClientes,setshowClientes] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const fetchMotos = async () => {
            try {
                const response = await axios.get<IMoto[]>("https://dbacktienda.onrender.com/api/moto");
                setMotos(response.data);
            } catch (error) {
                console.error("Error al obtener las motos", error);
            }
        };
        fetchMotos();
    }, []);

    // Crear una nueva moto o actualizar una existente
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (isEditing && editId) {
                // Actualizar moto
                const response = await axios.put(`https://dbacktienda.onrender.com/api/moto/${editId}`, dataForm);
                setMotos((prev) => prev.map((moto) => (moto._id === editId ? response.data : moto)));
                setIsEditing(false);
                setEditId(null);
            } else {
                // Crear nueva moto
                const response = await axios.post("https://dbacktienda.onrender.com/api/moto", dataForm);
                setMotos((prev) => [...prev, response.data]);
            }

            // Resetear el formulario
            setDataForm({
                nombre: "",
                marca: "",
                modelo: "",
                descripcion: "",
                año: "",
                cilindraje: "",
                precio: 0,
                imagen: "",
            });
        } catch (error) {
            console.error("Error al enviar los datos", error);
        }
    };

    // Eliminar una moto
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://dbacktienda.onrender.com/api/moto/${id}`);
            setMotos((prev) => prev.filter((moto) => moto._id !== id));
        } catch (error) {
            console.error("Error al eliminar la moto", error);
        }
    };

    // Cargar datos para editar
    const handleEdit = (moto: IMoto) => {
        setDataForm(moto);
        setIsEditing(true);
        setEditId(moto._id || null);
    };

    const handleBtnUsuarios = async()=>{
      setshowUsers(!showUsers)
    }

    const handleBtnClientes = async()=>{
      setshowClientes(!showClientes)

    }


    

    return (
        <div>
  <h1 className="titulo">Gestión de Motos <BsWrenchAdjustable/></h1>
  <div className="form-container">
    <form onSubmit={handleSubmit} className="formulario">
      <div className="form-item">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={dataForm.nombre}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="marca" className="form-label">Marca:</label>
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={dataForm.marca}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="modelo" className="form-label">Modelo:</label>
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={dataForm.modelo}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="descripcion" className="form-label">Descripcion:</label>
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={dataForm.descripcion}
          onChange={(e) => setDataForm({ ...dataForm, descripcion: e.target.value })}
          required
          className="form-textarea"
        />
      </div>
      <div className="form-item">
        <label htmlFor="año" className="form-label">Año:</label>
        <input
          type="text"
          name="año"
          placeholder="Año"
          value={dataForm.año}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="cilindraje" className="form-label">Cilindraje:</label>
        <input
          type="text"
          name="cilindraje"
          placeholder="Cilindraje"
          value={dataForm.cilindraje}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="precio" className="form-label">Precio:</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={dataForm.precio}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-item">
        <label htmlFor="imagen" className="form-label">Imagen:</label>
        <input
          type="text"
          name="imagen"
          placeholder="Imagen (URL)"
          value={dataForm.imagen}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        {isEditing ? "Actualizar" : "Crear"} <MdCreateNewFolder/>
      </button>
    </form>

  </div>
      <button className="btn-usuario" onClick={handleBtnUsuarios}><FaUserAlt/> {showUsers? 'Ocultar usuarios' : 'Ver usuarios'}</button>
      <button className="btn-cliente" onClick={handleBtnClientes}>< FaUserTie/> {showClientes? 'Ocultar clientes' : 'Ver clientes'}</button>
      {showClientes && (
        <div>
          <InfoClientes/>
        </div>
      )}
      {showUsers && (
        <div>
          <InfoUsuario/>
        </div>
      )}
  {/* Listado de motos */}
  <div className="moto-list">
    {motos.map((moto) => (
      <div key={moto._id} className="moto-card">
        <h3 className="moto-name">{moto.nombre}</h3>
        <p><strong>Marca:</strong> {moto.marca}</p>
        <p><strong>Modelo:</strong> {moto.modelo}</p>
        <p><strong>Año:</strong> {moto.año}</p>
        <p><strong>Precio:</strong> ${moto.precio}</p>
        <p><strong>Cilindraje:</strong> {moto.cilindraje}</p>
        <p><strong>Descripcion:</strong> {moto.descripcion}</p>
        <img src={moto.imagen} alt={moto.nombre} className="moto-img" />
        <button onClick={() => handleEdit(moto)} className="moto-btn"><IoMdCreate/> Editar</button>
        <button onClick={() => handleDelete(moto._id!)} className="moto-btn"><MdDelete/> Eliminar</button>
      </div>
    ))}
  </div>
</div>

    
    );
}
