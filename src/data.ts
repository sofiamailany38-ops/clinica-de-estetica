import { Procedure, Testimonial } from "./types";

export const PROCEDURES: Procedure[] = [
  {
    id: "limpeza-pele",
    name: "Limpeza de Pele Profunda",
    description: "Tratamento facial para remover impurezas, controlar oleosidade, renovar a pele e melhorar a aparência dos poros.",
    benefits: ["Remoção de cravos e miliuns", "Controle rigoroso da oleosidade", "Renovação celular e desintoxicação", "Melhor absorção de dermocosméticos"],
    duration: "60 minutos"
  },
  {
    id: "botox-facial",
    name: "Botox Facial",
    description: "Procedimento para suavizar linhas de expressão e proporcionar uma aparência mais jovem, descansada e sofisticada.",
    benefits: ["Suaviza rugas dinâmicas da testa", "Reduz linhas ao redor dos olhos (pés de galinha)", "Prevenção do envelhecimento precoce", "Aspecto natural e descansado"],
    duration: "40 minutos"
  },
  {
    id: "preenchimento-facial",
    name: "Preenchimento Facial",
    description: "Técnica avançada com ácido hialurônico para restaurar volume perdido, melhorar contornos e trazer harmonia ao rosto.",
    benefits: ["Definição da mandíbula e queixo", "Volume e contorno labial elegante", "Suavização do sulco nasogeniano (bigode chinês)", "Amenização marcante de olheiras profundas"],
    duration: "60 minutos"
  },
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    description: "Conjunto personalizado de procedimentos para equilibrar, projetar e valorizar os traços naturais com extrema elegância.",
    benefits: ["Melhora na simetria geral do rosto", "Realce de traços marcantes e sofisticados", "Planejamento sob medida para cada paciente", "Abordagem integrada e de alto nível"],
    duration: "90 minutos"
  },
  {
    id: "peeling-facial",
    name: "Peeling Facial",
    description: "Tratamento de renovação celular controlada para melhorar a textura da pele, atenuar manchas e devolver a luminosidade natural.",
    benefits: ["Clareamento visível de manchas e melasmas", "Redução de poros dilatados e marcas finas", "Estímulo de colágeno novo", "Luminosidade e viço imediatos na pele"],
    duration: "45 minutos"
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento",
    description: "Indução percutânea de colágeno para preenchimento de cicatrizes de acne, marcas do tempo e melhora global da textura dérmica.",
    benefits: ["Estímulo massivo de colágeno e elastina", "Atenuação marcante de cicatrizes de acne", "Melhora visível da firmeza e flacidez", "Abertura de canais para permeação de ativos (drug delivery)"],
    duration: "60 minutos"
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem Linfática",
    description: "Massagem altamente especializada para acelerar a eliminação de líquidos retidos, melhorar a circulação e promover um relaxamento ímpar.",
    benefits: ["Redução imediata do inchaço e retenção hídrica", "Eliminação ativa de toxinas corporais", "Aceleração da recuperação pós-cirúrgica", "Sensação profunda de bem-estar"],
    duration: "50 minutos"
  },
  {
    id: "massagem-modeladora",
    name: "Massagem Modeladora",
    description: "Procedimento corporal com manobras firmes e rítmicas para auxiliar na definição dos contornos corporais e melhorar a aparência do relevo cutâneo.",
    benefits: ["Ativação da circulação sanguínea e linfática", "Melhora na aparência da celulite", "Favorecimento da definição das curvas corporais", "Pele com textura mais firme e tonificada"],
    duration: "60 minutos"
  },
  {
    id: "depilacao-laser",
    name: "Depilação a Laser",
    description: "Eliminação progressiva dos pelos indesejados de forma segura, durável e com tecnologia de resfriamento para o máximo conforto.",
    benefits: ["Eliminação de até 90% dos pelos", "Prevenção definitiva da foliculite e pelos encravados", "Pele lisa, uniforme e macia", "Máxima praticidade e economia a longo prazo"],
    duration: "30 a 60 minutos"
  },
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description: "Modelagem de sobrancelhas baseada no visagismo facial, projetada para destacar o olhar e harmonizar a moldura do seu rosto.",
    benefits: ["Simetria e alinhamento sob medida", "Realce e abertura expressiva do olhar", "Harmonização precisa com as proporções faciais", "Uso de técnicas de visagismo de alto padrão"],
    duration: "30 minutos"
  },
  {
    id: "tratamento-detox",
    name: "Tratamento Corporal Detox",
    description: "Protocolo purificante completo combinando esfoliação, argiloterapia e massagem para revitalização celular e nutrição profunda da derme.",
    benefits: ["Desintoxicação profunda e purificação dérmica", "Eliminação de células mortas e toque aveludado", "Nutrição mineral intensiva", "Leveza física e mental imediata"],
    duration: "60 minutes"
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    description: "Hidratação injetável ultra-profunda que atua nas camadas internas da pele para restaurar o brilho, elasticidade e textura de pele de seda.",
    benefits: ["Hidratação de dentro para fora altamente superior", "Melhora na elasticidade e viço da derme", "Suavização sutil de rugas finas", "Aparência rejuvenescida de pele descansada e bem cuidada"],
    duration: "50 minutos"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    text: "Minha pele mudou completamente desde que comecei a me tratar na Éclat. O atendimento é maravilhoso, focado no respeito à minha individualidade, e o ambiente de luxo nos faz sentir verdadeiras rainhas.",
    author: "Juliana Santos",
    city: "São Paulo - SP"
  },
  {
    id: "t2",
    text: "Uma clínica incrivelmente elegante com profissionais atenciosas, extremamente qualificadas e dedicadas. Realizei o Botox e preenchimento, e os resultados ficaram super naturais e refinados. Recomendo muito!",
    author: "Mariana Costa",
    city: "Campinas - SP"
  },
  {
    id: "t3",
    text: "O nível de sofisticação e profissionalismo da Éclat é inigualável. Desde a recepção até a consulta com as especialistas, tudo transmite luxo e compromisso real com nossa autoestima e saúde.",
    author: "Beatriz Oliveira",
    city: "Campinas - SP"
  }
];

export const CONTACT_INFO = {
  name: "Éclat Beauty Clinic",
  address: "Rua das Flores, 245, Jardim Bela Vista, Campinas - SP",
  phone: "(19) 99999-8888",
  hours: [
    { days: "Segunda a sábado", time: "08:00 às 19:00" },
    { days: "Domingos e feriados", time: "Fechado" }
  ],
  whatsappLink: "https://wa.me/5519999998888?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20%C3%89clat%20Beauty%20Clinic.",
  instagram: "https://instagram.com/eclatbeautyclinic_ficticio",
  facebook: "https://facebook.com/eclatbeautyclinic_ficticio"
};
