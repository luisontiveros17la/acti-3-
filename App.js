import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    { title: "PlayStation 5", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYqYcqM_ZhPygqIOOGsQNeh1TKxVaiafZmHnN8Te7WeVWC_dV2EJC3NlArnuXX71h9__tXhKZKtx2dgPkQrrFp3VdlHDfKKjwMGMnv2NL9qbSMpW-uF4uKMuIipeqBYXQG0eTViw&usqp=CAc", description: "La consola de última generación de Sony con gráficos impresionantes y rápido rendimiento.", price: 499, className: "ps5" },
    { title: "Xbox Series X", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4C9MKdzyqiGnHzBbF6duvQFll_kJ_gEp1WIgoeGrdg-O6J66AzUxnsM1_6jAH-aN8CAmyNQkL-SFbu9igKxbq5z5GD51s6FxtBIeaKsRX9M_XQOLbprB-", description: "La consola más potente de Microsoft, ideal para jugadores hardcore.", price: 499, className: "xbox" },
    { title: "Nintendo Switch OLED", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiTxfdr_RQRCDMSb2qHlduWhXt91PxHpOeBlu4N9RFo9QdDCjJ1gRE_e2yAxJ39492gPzdDwgZMiwSVgH4eQ2ASKl85Q5cX9ecMOlcQze8SYFRGNg20OPDtC5xtAj3MRlLsyvMew&usqp=CAc", description: "Disfruta de tus juegos favoritos con una pantalla OLED vibrante.", price: 349, className: "nintendo" },
    { title: "Minecraft (Edición para PC)", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqyyA1TAKcxgdCYZGn22DQqnMuEhOXqwNRYFWYAtq5eWQAMHpnJdryZRDxkA46Rdin_gAM_oiIJtgT8FgJOCPW6xYyAltsncE1NPkTaOYdKH4nufzGwExDvg", description: "Explora mundos infinitos y construye cualquier cosa en este popular videojuego.", price: 29, className: "minecraft" },
    { title: "The Legend of Zelda: Breath of the Wild", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFMj5wQ6uVy6pLVzA0Jq5Hb7_i5LEyNvo1Wo1z_-Tc29oky1anRyAb9laGRZM9GcmPoSW31OVSI9grFapwpVQNVlsSKbEEnbNkq2ruH0tOHgMwmTD_knCF8g", description: "Embárcate en una épica aventura en el mundo abierto de Hyrule.", price: 60, className: "zelda" },
    { title: "Grand Theft Auto V", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZwmxrb7KEgYkUYUDVBsPLLO6mn6-SzJ6fob-PfdQ8tP-y4pDypmdOyLr9rm7SiOBudfF5qEzV_j9P8abGgHQhpf8wLPBXlWTLq1AKq6LGgKTAlqmPS_oz", description: "Vive una experiencia de crimen y acción en Los Santos.", price: 30, className: "gta" },
    { title: "Control inalámbrico DualSense", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNzxy9ezeoDPgsuCDkchpeXe8-Sh-Wh1lbmsy62aB1Yvy9Nv59HqnQmqJLCQ75Ax4nU8_viJFmuyxhnISLjA78bJQYSRWzEeQViZRq-ef2dPA2FK6v9fMEhA", description: "El revolucionario control para PlayStation 5 con retroalimentación háptica.", price: 69, className: "dualsense" },
    { title: "Auriculares para gaming HyperX", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRA1yckS6NhR8Z2Ex-ktzp1HRDlb6CV5S8WfElE32xqoqeBu9fZaf94do0f_gpomRLzFkj-vNBM_hSy1TF58gomNC4lSXJHhEr04QjOMO6V4QGxotHCpKngfQ", description: "Calidad de sonido premium para mejorar tu experiencia de juego.", price: 99, className: "hyperx" },
    { title: "Spider-Man: Miles Morales", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR1-Rt-DXtNq44pXtWp3d_NCkeJ2XX6fPHYgAISBt36w120WOQvrivoVtO-NV5s3JEsIQxAkRDMR_SvifovPK3c47aLKPmMCrUtqY3Dj7dyciY1R0ck_Kfr9A", description: "Únete a Miles en su lucha contra el crimen en Nueva York.", price: 50, className: "miles-morales" },
    { title: "Assassin's Creed Valhalla", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1GYwGDy3lb9eLhAGprUfBeA6seFjDA6O5D6Hd2hC4CIOTWMRxX1pZCST4zo8oRxRm1kHMqlYs6SisxR50EyDehO3gzYRQ0_EH7IJN9rbeE-JKbChyR-86ig", description: "Explora la era de los vikingos en este increíble RPG.", price: 40, className: "valhalla" },
  ];

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPurchaseSuccess(true);
    setShowForm(false);
    setSelectedProducts([]);
  };

  return (
    <div className="App">
      <header>
        <h1>Mi Tienda en Línea</h1>
      </header>
      <main id="product-list">
        {products.map((product, index) => (
          <div key={index} className={`product-card ${product.className}`}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <button onClick={() => handleSelectProduct(product)}>Comprar</button>
          </div>
        ))}
      </main>
      {selectedProducts.length > 0 && (
        <button className="show-form-btn" onClick={handleShowForm}>
          Continuar con la compra
        </button>
      )}
      {showForm && (
        <form className="purchase-form" onSubmit={handleSubmit}>
          <h2>Formulario de compra</h2>
          <label>
            Nombre: <input type="text" required />
          </label>
          <label>
            Dirección: <input type="text" required />
          </label>
          <label>
            Número de teléfono: <input type="tel" required />
          </label>
          <label>
            Correo electrónico: <input type="email" required />
          </label>
          <button type="submit">Finalizar compra</button>
        </form>
      )}
      {purchaseSuccess && (
        <div className="success-message">
          Compra exitosa, se enviará a la dirección dentro de 5 días. 🎉
        </div>
      )}
    </div>
  );
}

export default App;
