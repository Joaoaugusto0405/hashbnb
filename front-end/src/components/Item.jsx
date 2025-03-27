import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-701378050607755392/original/a3b6d616-62fe-4fac-b38e-5fa50dfd3732.jpeg?im_w=1200"
        alt="imagem da acomodacao"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Guarapari,Brasil</h3>
        <p className="truncate text-gray-600">
          Espaço inteiro: Casa de Praia (hospedado por Claudio & Helena) Única
          casa para locação com espaço para até 16 pessoas, conectado à Praia,
          de frente para o mar. Excelente casa (acomoda 7 famílias c/
          privacidade) + 02 cozinhas montadas (fogão, geladeira e micro-ondas) +
          varandão com vista para o mar. Todo mobiliado para receber familiares
          e amigos. Ventilador de teto em todos os quartos quartos, 05 vagas
          garagem, Wifi, câmera de monitoramento e cerca elétrica. Área externa
          espaçosa e agradável. O espaço é amplo e perfeito para churrascos e
          acomodar muitas pessoas. Outras observações Local destinado para
          família e amigos que desejam descanso em um ambiente familiar.
          Proibido grandes eventos e festas.
        </p>
      </div>

      <p>
        <span className="font-sembold">R$ 550 </span>por noite
      </p>
    </a>
  );
};

export default Item;
