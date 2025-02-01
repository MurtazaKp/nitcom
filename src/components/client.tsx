import React from 'react';

const ClientsSection = () => {
  const clients = [
    'client-1.png',
    'client-2.png',
    'client-3.png',
    'client-4.png',
    'client-5.png',
    'client-6.png',
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="row gy-4">
          {clients.map((client, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={`/assets/img/clients/${client}`}
                className="img-fluid"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
