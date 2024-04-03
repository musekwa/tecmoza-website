import React from "react";

type Props = {};

const PrivacyPolicyPage = (props: Props) => {
  return (
    <div className="h-full px-6 py-16 lg:px-24 space-y-6 text-[18px] bg-white">
      <div className="h-[200px] bg-gray-200 flex flex-col justify-center">
        <h1 className="text-xl lg:text-2xl font-bold text-sky-500 ">
          Política de Privacidade & Termos de Uso
        </h1>
        <div className="w-[200px] h-1 bg-yellow-500 my-2" />
      </div>
      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Política de Privacidade
      </h1>
    
      <p className="leading-loose">
        A TECMOZA valoriza a privacidade dos seus clientes e visitantes do
        website. Esta Política de Privacidade descreve como coletamos, usamos,
        mantemos e divulgamos informações coletadas quando você acessa ou usa
        nosso website e serviços. Informações Coletadas Podemos coletar
        informações pessoais como nome, endereço de e-mail e outras informações
        que você fornecer voluntariamente ao entrar em contato conosco ou usar
        nossos serviços. Também coletamos automaticamente certas informações
        técnicas quando você visita nosso website.
      </p>
      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Uso das Informações
      </h1>
    
      <p className="leading-loose">
        Usamos as informações coletadas para fornecer e melhorar nossos
        serviços, processar solicitações, enviar comunicações de marketing e
        cumprir obrigações legais.
      </p>
      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Divulgação das Informações
      </h1>
      
      <p className="leading-loose">
        Não vendemos nem compartilhamos suas informações pessoais com terceiros
        para fins de marketing. Apenas compartilhamos informações conforme
        exigido por lei ou com provedores de serviços terceirizados que nos
        auxiliam em operações internas. Política de Termos de Uso
        <br />
        Ao acessar nosso website, você concorda em cumprir esta Política de
        Termos de Uso e todas as leis e regulamentos aplicáveis. Reservamo-nos o
        direito de modificar estes Termos a qualquer momento.
      </p>

      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Divulgação de Informações
      </h1>
     
      <p className="leading-loose">
        Você concorda em usar nosso website apenas para fins legais e de acordo
        com estes Termos. É proibido usar nosso website para qualquer propósito
        ilegal ou inadequado.
      </p>

      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Propriedade Intelectual
      </h1>
     
      <p className="leading-loose">
        Todo o conteúdo e materiais disponíveis em nosso website, incluindo
        logotipos, marcas registradas, textos e imagens, são de nossa
        propriedade ou licenciados para nosso uso e estão protegidos por leis de
        propriedade intelectual.
      </p>

      <h1 className="text-lg lg:text-xl font-bold text-sky-900">
        Limitação de Responsabilidade
      </h1>
     
      <p className="leading-loose">
        Não nos responsabilizamos por danos diretos, indiretos, incidentais ou
        conseqüentes decorrentes do uso ou incapacidade de usar nosso website e
        serviços.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
