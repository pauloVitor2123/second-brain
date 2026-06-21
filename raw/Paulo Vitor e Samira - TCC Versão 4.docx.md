---
title: "Paulo Vitor e Samira - TCC Versão 4.docx"
source: "https://docs.google.com/document/d/1KpzxCyW_5KQJfai9kJ31wH2x3G7yxj5j/edit"
author:
published:
created: 2026-06-21
description: "FACULDADE CESGRANRIO - FACESG CURSO DE SISTEMAS DE INFORMAÇÃO TRABALHO DE CONCLUSÃO DE CURSO - TCC        APLICATIVO QUE CONECTA PESSOAS A EVENTOS: AVALIANDO O PERFIL DO USUÁRIO     Paulo Vitor de Souza Samira Habib da Silva              Rio de Janeiro Dezembro/2023 FACULDADE CESGRANRIO - FACESG..."
tags:
  - "clippings"
---
FACULDADE CESGRANRIO - FACESG
CURSO DE SISTEMAS DE INFORMAÇÃO
TRABALHO DE CONCLUSÃO DE CURSO - TCC







APLICATIVO QUE CONECTA PESSOAS A EVENTOS: AVALIANDO O PERFIL DO USUÁRIO




Paulo Vitor de Souza
Samira Habib da Silva













Rio de Janeiro
Dezembro/2023

FACULDADE CESGRANRIO - FACESG
CURSO DE SISTEMAS DE INFORMAÇÃO
TRABALHO DE CONCLUSÃO DE CURSO - TCC



APLICATIVO QUE CONECTA PESSOAS A EVENTOS: AVALIANDO O PERFIL DO USUÁRIO



Paulo Vitor de Souza
Samira Habib da Silva



Trabalho acadêmico apresentado ao Curso de Sistemas de Informação da Faculdade Cesgranrio (FACESG), como requisito parcial para a obtenção do título de Bacharel em Sistemas de Informação.

Orientador: Mestre André Przewodowski Filho e Mestre Geraldo Motta.





Rio de Janeiro
Dezembro/2023

Dados Internacionais de Catalogação na Publicação (CIP)

S729a	Souza, Paulo Vitor de.

		Aplicativo que conecta pessoas a eventos: avaliando o perfil do usuário / Paulo Vitor de Souza; Samira Habib da Silva. - 2024.
	      90 f. : il. ; 30 cm.
		
	      Orientador: MS André Przewodowski Filho; Geraldo Motta.
	      Graduação (Trabalho de Conclusão de Curso em Sistemas de Informação) - Faculdade Cesgranrio, Fundação Cesgranrio, Rio de Janeiro, 2024.
	Bibliografia: f. 77-82.
	     
	     1. Sistemas – Aplicativos. 2. Avaliação de Usuários. 3. Inovação Tecnológica. 4 Eventos. I. Silva, Samira Habib da.  II. Título.                 
CDD 003.01

Ficha catalográfica elaborada por Anna Karla S. da Silva (CRB7/6298)


FACULDADE CESGRANRIO - FACESG
CURSO DE SISTEMAS DE INFORMAÇÃO
TRABALHO DE CONCLUSÃO DE CURSO - TCC




APLICATIVO QUE CONECTA PESSOAS A EVENTOS: AVALIANDO O PERFIL DO USUÁRIO


Paulo Vitor de Souza
Samira Habib da Silva




APROVADO EM: _________________________


BANCA EXAMINADORA:

_______________________________________
Antônio José Dias da Silva - Mestre

_______________________________________
Flávia Balbino da Costa - Mestre

_______________________________________
Rogério Pinheiro de Souza - Mestre


Rio de Janeiro
Dezembro/2023


RESUMO

O Trabalho de Conclusão de Curso (TCC) aborda a criação e desenvolvimento de um aplicativo móvel inovador voltado para a recomendação personalizada de eventos com base no perfil do usuário. O problema central abordado é a dificuldade enfrentada pelos usuários em encontrar eventos alinhados aos seus interesses pessoais em meio à diversidade de opções locais. O contexto destaca a crescente demanda por soluções tecnológicas que proporcionem experiências mais personalizadas na busca e participação em eventos. O objetivo principal do trabalho é apresentar o processo de concepção, desenvolvimento e implementação do aplicativo, destacando não apenas os aspectos técnicos, mas também as implicações sociais e culturais desse avanço tecnológico. A metodologia adotada incluiu a análise de comportamento do consumidor, análise de mercado para software e uma abordagem centrada no usuário para personalizar as recomendações de eventos. No cerne do aplicativo proposto está uma arquitetura robusta, utilizando o backend como serviço Supabase e o frontend em React Native. O sistema oferece funcionalidades como favoritar e confirmar presença em eventos, enriquecendo a participação do usuário. Destaca-se a inovação presente no sistema de recomendação, impulsionado por algoritmos de análise de dados que compreendem as preferências dos usuários com base em interações passadas. As considerações finais ressaltam a contribuição significativa do aplicativo para a evolução da interação humana com a tecnologia móvel, oferecendo uma maneira única de conectar e participar em eventos moldados pelas preferências individuais de cada usuário.

Palavras-chave: Inteligência Artificial, Aplicativo Móvel, Sistema de Recomendação, Perfil do Usuário, Inovação Tecnológica, Eventos.

ABSTRACT

The Final Course Project (TCC) addresses the creation and development of an innovative mobile application focused on personalized event recommendations based on user profiles. The central issue discussed is the challenge users face in finding events aligned with their personal interests amid a diversity of local options. The context underscores the growing demand for technological solutions that provide more personalized experiences in searching for and participating in events. The main objective of the work is to present the process of conceiving, developing, and implementing the application, highlighting not only the technical aspects but also the social and cultural implications of this technological advancement. The adopted methodology included consumer behavior analysis, market analysis for software, and a user-centered approach to personalize event recommendations. At the core of the proposed application is a robust architecture, utilizing Supabase as the backend service and React Native for the frontend. The system offers features such as favoriting and confirming attendance at events, enhancing user participation. The innovation lies in the Recommendation System, driven by data analysis algorithms that understand user preferences based on past interactions. Final considerations emphasize the significant contribution of the application to the evolution of human interaction with mobile technology, providing a unique way to connect and participate in events shaped by each user's individual preferences.

Keywords: Artificial Intelligence, Mobile Application, Recommendation System, User Profile, Technological Innovation, Events.
LISTA DE TABELAS

Tabela 1 - Tipos de Eventos Preferidos	86
Tabela 2 - Frequência de Participação em Eventos	87
Tabela 3 - Atitude em Relação aos Eventos	87
Tabela 4 - Meios de Descobrir Eventos	87
Tabela 5 - Obstáculos na Participação em Eventos	88
Tabela 6 - Participação em Eventos Online	89
Tabela 7 - Disposição para Pagar por Eventos	89
Tabela 8 - Gênero	89
Tabela 9 - Faixa Etária	90


LISTA DE FIGURAS

Figura 1 - Pergunta 9 - Pesquisa	28
Figura 2 - Pergunta 6 - Pesquisa	29
Figura 3 - Pergunta 8 - Pesquisa	30
Figura 4 - Logo Sympla	32
Figura 5 - Logo Eventbrite	33
Figura 6 - Logo Fever	34
Figura 7 - Pergunta 1 - Pesquisa	37
Figura 8 - Pergunta 5 - Pesquisa	38
Figura 9 - Pergunta 4 - Pesquisa	38
Figura 10 - Pergunta 2 - Pesquisa	39
Figura 11 - Pergunta 3 - Pesquisa	42
Figura 12 - Página Inicial do Aplicativo	45
Figura 13 - Fórmula de Similaridade do Cosseno	47
Figura 14 - Visão Global Casos de uso	51
Figura 15 - Diagrama de caso e uso - Buscar eventos	53
Figura 16 - Diagrama de caso e uso - Autenticar	55
Figura 17 - Diagrama de caso e uso - Gerenciar Perfil	57
Figura 18 - Diagrama de caso e uso - Relatórios Operacionais de Eventos	59
Figura 19 - Diagrama de caso e uso - Gerenciar Eventos	61
Figura 20 - Diagrama de caso e uso - Visualizar Dashboard	63
Figura 21 - Diagrama Entidade Relacionamento	65
Figura 22 - Diagrama de Classe	66
Figura 23 - Diagrama de Sequência - Fluxo de Autenticação	70
Figura 24 - Diagrama de Sequência - Fluxo de Buscar Eventos	71
Figura 25 - Diagrama de Sequência - Fluxo de Gerenciar Perfil	72
Figura 26 - Diagrama de Sequência - Fluxo de Gerenciar Eventos	73
Figura 27 - Diagrama de Sequência - Fluxo de Relatórios Gerenciais	74


SUMÁRIO
CAPÍTULO 1. APRESENTAÇÃO DO TEMA	12
1.1 Motivação	14
1.2 Objetivos	14
1.3.1 Objetivo Geral	14
1.3.2 Objetivos Específicos	15
1.3 Justificativa e Relevância	15
1.4 Metodologias	16
1.4.1 Programação Orientada a Objeto (POO)	17
1.4.2 Linguagem de Modelagem Unificada (UML)	18
1.4.3 Projeto de Banco de Dados	18
1.4.4 Sistema de Recomendação	19
1.4.5 Aplicativo Mobile	19
1.5 Organização do Texto	20
CAPÍTULO 2. FUNDAMENTAÇÃO TEÓRICA	22
2.1 Dispositivos móveis	22
2.2 Usabilidade	23
2.3 Inteligência Artificial	24
2.4 Aprendizado de Máquina	25
CAPÍTULO 3. ANÁLISE DE MERCADO / ANÁLISE DA EMPRESA	27
3.1 Introdução à Análise de Mercado para o Software	27
3.2  Definição do Mercado-Alvo para o Software	27
3.3 Análise de Tendências no Desenvolvimento de Software	30
3.4 Análise da Concorrência	31
3.5 Análise SWOT para o Software	34
3.5.1 Forças (Strengths)	35
3.5.2 Fraquezas (Weaknesses)	35
3.5.3 Oportunidades (Opportunities)	36
3.5.4 Ameaças (Threats)	36
3.6 Comportamento do Consumidor de Software	36
3.7 Análise de Preços e Modelos de Licenciamento	40
3.8 Canais de Distribuição para o Software	41
3.9 Regulamentações e Normas no Desenvolvimento de Software	41
3.10 Projeções de Mercado para o Software	41
CAPÍTULO 4. PROJETO DE SOFTWARE/SISTEMA OU SOLUÇÃO PROPOSTA	44
4.1 Propósito do Aplicativo	44
4.2 Arquitetura do Projeto	44
4.3 Funcionalidades Atuais	44
4.4 Localização e Pesquisa de Eventos	45
4.5 Uso de Dados e Sistema de Recomendação	46
4.6 Validação de Gerentes de Eventos	47
4.7 Diversidade de Usuários	48
4.8 Desafios e Futuras Integrações	48
CAPÍTULO 5. DIAGRAMAS DO SISTEMA	50
5.1 Diagrama de Caso de Uso	50
5.2 Diagrama Entidade Relacionamento	65
5.3 Diagrama de Classe	66
5.3.1 Dicionário de Dados	66
5.4 Diagrama de Sequência	70
CAPÍTULO 6. CONCLUSÃO	75












INTRODUÇÃO

A ideia do aplicativo surge a partir da percepção de que muitas vezes os usuários têm dificuldade em encontrar programações que estejam alinhados com seus interesses pessoais. O aplicativo móvel visa conectar usuários a eventos próximos com base em seu perfil de interesse. A proposta visa utilizar algoritmos de análise de dados para criar um perfil do usuário, levando em consideração suas interações e preferências dentro do aplicativo.
Com as mudanças tecnológicas, foram estabelecidos padrões de consumo para a sociedade, isso é acelerado desde o processo de industrialização global. Tornou-se importante para o mercado ser adaptável ao momento, sendo competitivo e mais dinâmico. Os consumidores de acessos móveis estão sempre exigindo uma melhor experiência e personalização de serviços, os quais se encaixem nessas mudanças inovadoras e suas preferências, para que possam utilizar plenamente sua mobilidade, eliminando barreiras entre as tecnologias. (ELGAZZAR, MARTIN & HASSANEIN, 2014)
Então, o trabalho apresentará uma análise detalhada do processo de desenvolvimento do aplicativo, desde a concepção da ideia até a implementação do algoritmo de análise de dados. Também serão apresentados os resultados obtidos a partir da utilização do aplicativo, bem como as lições aprendidas durante o processo de desenvolvimento.



CAPÍTULO 1. APRESENTAÇÃO DO TEMA

No âmbito deste Trabalho de Conclusão de Curso (TCC), explora-se a intrincada jornada do desenvolvimento de um aplicativo móvel inovador, destinado a revolucionar a forma como os usuários interagem com eventos locais. Sob o título “Desenvolvimento de um aplicativo móvel para recomendação de eventos baseado em perfil do usuário”, esta pesquisa mergulha profundamente na concepção, criação e implementação de uma solução tecnológica que transcende as barreiras tradicionais da busca por eventos.
O aplicativo em questão não se limita a uma categoria específica de eventos; ao contrário, pretende abranger um espectro diversificado, englobando desde entretenimento e arte até negócios e causas sociais. Esta abordagem inclusiva visa oferecer aos usuários uma plataforma abrangente, onde a riqueza da experiência humana pode ser explorada e compartilhada.
No cerne do aplicativo proposto, encontram-se funcionalidades essenciais cuidadosamente elaboradas para aprimorar a experiência do usuário. Uma dessas características fundamentais é o sistema de cadastro e autenticação dos usuários, que será implementado com métodos de entrada seguros. Este sistema permitirá que os usuários se cadastrem e se autentiquem de forma conveniente, utilizando plataformas consolidadas, como o Google, garantindo tanto a segurança quanto a simplicidade no acesso ao aplicativo.
Além disso, o aplicativo apresenta uma abordagem inovadora para a descoberta de eventos, eliminando as barreiras temporais tradicionalmente encontradas em outras plataformas. Os usuários terão a oportunidade de explorar eventos imediatos, sem as limitações de tempo comuns em outras soluções similares. Esta flexibilidade temporal permitirá que os usuários encontrem eventos que estejam acontecendo dentro de um período de 24 horas, proporcionando experiências instantâneas e dinâmicas.
No que diz respeito às interações com os eventos, o aplicativo oferece diversas funcionalidades que enriquecem a participação do usuário. Os usuários terão a capacidade de marcar eventos como favoritos, personalizando suas escolhas para futuras referências. Além disso, a funcionalidade de compartilhamento possibilita que os usuários ampliem o alcance dos eventos para suas redes sociais, incentivando uma maior participação e interação com a comunidade. Confirmar presença em eventos é simplificado, facilitando a organização e a participação dos usuários em atividades de seu interesse. Após participar de um evento, os usuários podem fornecer feedback valioso por meio da funcionalidade de avaliação, permitindo-lhes classificar os eventos e compartilhar suas percepções, enriquecendo a experiência tanto para outros usuários quanto para os organizadores dos eventos.
Além disso, o aplicativo adota uma abordagem centrada no usuário para personalizar as recomendações de eventos. Analisando cuidadosamente as atividades dos usuários, como visualizar detalhes de eventos, marcar eventos como favoritos e confirmar presença, o aplicativo cria um perfil dinâmico e preciso para cada usuário. Essa personalização minuciosa permite que o aplicativo ofereça sugestões altamente relevantes e adaptadas às preferências individuais de cada usuário, proporcionando uma experiência única e enriquecedora. Essas interações serão utilizadas para traçar o perfil do usuário, por exemplo, se um usuário interage com eventos de futebol com mais frequência o algoritmo entenderá que este perfil gosta de esporte
Uma característica distintiva do aplicativo é sua ausência de limitações geográficas. Os usuários são livres para explorar eventos em qualquer localidade, sem restrições físicas ou geográficas. Essa liberdade geográfica amplia significativamente as possibilidades dos usuários, permitindo-lhes descobrir eventos em diversas partes do mundo e expandir suas experiências para além das fronteiras locais.
Este estudo representa uma contribuição significativa para a evolução da interação humana com a tecnologia móvel, explorando o potencial transformador de uma aplicação centrada no usuário.
No decorrer deste trabalho, será explorado em detalhes o processo de concepção, desenvolvimento e implementação deste aplicativo, destacando não apenas os aspectos técnicos, mas também as implicações sociais e culturais deste avanço tecnológico. O objetivo final é não apenas criar um aplicativo, mas estabelecer uma nova maneira de se conectar e participar em eventos, moldada pelas preferências e interações individuais de cada usuário.
Motivação

A motivação é com base na oportunidade de atender a uma demanda real dos usuários por uma solução mais personalizada e eficiente para encontrar eventos de seu interesse. Além disso, haveria a possibilidade de explorar um mercado em expansão, já que cada vez mais pessoas utilizam dispositivos móveis e aplicativos para buscar informações e serviços. (DELGADO, 2022)
Os aplicativos móveis têm sido um dos grandes diferenciais para as empresas que procuram oferecer serviços que buscam reduzir a complexidade dos processos, estreitar relacionamentos com clientes e aumentar o alcance. (FERNANDES, 2020).
Há uma grande motivação para o desenvolvimento de um aplicativo móvel que possibilite a busca por eventos com base no perfil do usuário, visando solucionar dificuldades comuns como limitações financeiras, mobilidade e falta de informações precisas na internet. Essas dificuldades não se limitam somente aos residentes, mas principalmente também aos visitantes de uma determinada região. 

Objetivos

A aplicação desenvolvida tem como objetivo ajudar as pessoas que buscam eventos e atividades de lazer próximas a sua localização, mas que muitas vezes têm dificuldade em encontrar eventos alinhados aos seus interesses pessoais. Isso pode incluir pessoas de diferentes faixas etárias, desde jovens adultos até idosos, que procuram atividades de lazer e entretenimento. Além disso, a aplicação pode atender a um público específico, como pessoas interessadas em atividades culturais, esportivas e gastronômicas, por exemplo. (UKPABI, D., & KARJALUOTO, H., 2017)

1.3.1 Objetivo Geral

	Em síntese, o parágrafo em questão descreve os objetivos amplos de um sistema de busca de eventos, cuja finalidade consiste em estabelecer uma conexão entre os usuários, proporcionando a eles, eventos de acordo com seu perfil e localização, e aos organizadores, que por sua vez buscam por clientes em potencial que se enquadrem nos requisitos do evento. 

1.3.2 Objetivos Específicos

Identificar as necessidades dos usuários em relação à busca e conexão de eventos de interesse;
Desenvolver um algoritmo de análise de dados capaz de criar um perfil personalizado de cada usuário, com base nas interações dentro do aplicativo;
Implementar funcionalidades que permitam a busca e filtragem de eventos próximos, de acordo com as preferências de cada usuário;
Testar e avaliar a eficiência do aplicativo em recomendar eventos alinhados aos interesses dos usuários;
Contribuir para o avanço da tecnologia móvel e oferecer uma solução inovadora e eficiente para a conexão de eventos aos usuários.

Justificativa e Relevância

A partir das perspectivas apresentadas por Turkle (2012), que destaca o papel crucial do computador como base material para ideias coletivas, torna-se evidente a complexidade da relação entre as pessoas e essas ideias. Turkle enfatiza a necessidade de uma análise profunda da subcultura na qual estão imersas, uma subcultura que contribui para moldar a sociedade, especialmente no contexto de relações centradas no objeto móvel.
Atestando a relevância do desenvolvimento do aplicativo proposto, uma pesquisa social foi conduzida com mais de 160 participantes, proporcionando insights valiosos sobre as demandas e preferências do público-alvo. O perfil dos participantes revelou uma distribuição etária significativa, com 63,4% na faixa etária de 17 a 25 anos, 25,4% entre 26 e 35 anos, e 7% entre 36 e 45 anos. Quanto ao gênero, 65,7% pertencem ao público feminino, enquanto 33,6% pertencem ao público masculino.
Os resultados da pesquisa destacaram que 55,2% dos participantes enfrentam dificuldades em encontrar eventos relevantes, eventos alinhados ao seu perfil. Notavelmente, 97,5% expressaram o desejo de utilizar um aplicativo que facilitasse a descoberta de eventos, levando em consideração o perfil do usuário e recomendando eventos ideais. Quando questionados sobre o gerenciamento de eventos, 48,8% manifestaram indecisão ao responder "talvez" quanto à criação de seus próprios eventos. Por outro lado, 21,5% responderam "não", enquanto 30,1% responderam afirmativamente.
Esses dados substanciam a necessidade clara e premente de uma solução como o aplicativo proposto, que não apenas atenda à demanda por eventos personalizados, mas também oferece uma funcionalidade de gerenciamento de eventos. Ao considerar as conclusões de Turkle, percebemos que essa aplicação não apenas se encaixa na dinâmica das relações centradas no objeto móvel, mas também contribui para a formação de ideias coletivas ao facilitar interações sociais significativas através da tecnologia móvel.

Metodologias

A descrição do capítulo será destinada a apresentação das metodologias utilizadas para a execução do Trabalho de Conclusão de Curso (TCC). O modelo e a abordagem usada para o desenvolvimento de software será o Modelo Cascata, também conhecido como modelo em cascata ou waterfall, é uma das metodologias tradicionais de desenvolvimento de software. Essa abordagem segue uma sequência linear e sequencial de etapas, onde cada etapa será concluída antes de executar a seguinte. Segundo Sommerville (2018), essa abordagem é baseada na suposição de que os requisitos são claros e estáveis desde o início do projeto.
Definindo como ponto de partida a Pesquisa exploratória aplicada, a qual desempenha um papel fundamental na descoberta e na compreensão de fenômenos pouco conhecidos, proporcionando resultados valiosos para a investigação científica. Conforme destacado pelo autor Selltiz et al. (1965), em seu livro clássico 'Métodos de Pesquisa nas Relações Sociais', enfatizando a importância da pesquisa exploratória como etapa preliminar essencial. Eles afirmam que 'a pesquisa exploratória permite aos pesquisadores familiarizar-se com o campo de estudo, gerarem hipóteses iniciais e adquirirem uma compreensão mais profunda antes de empreenderem uma investigação rigorosa'. (SELLTIZ et al., 1965)
Na fase inicial do estudo, foram delimitados os escopos do projeto para o Trabalho de Conclusão de Curso e declarados os objetivos dele. Tratando-se de um desenvolvimento de software, ou produto, será de grande importância no decorrer da pesquisa as informações de cada etapa e o esclarecimento da construção do sistema. As etapas do projeto irão conter os diagramas do passo a passo ou as imagens ilustrativas, as quais irão refletir o desenvolvimento do Aplicativo Mobile de maneira sequencial. 
As etapas de construção do software serão declaradas pela Determinação das funcionalidades, Construção da estrutura do sistema, Desenvolvimento visual do software, Implementação e Elaboração de um protótipo inicial juntamente com os primeiros testes. Com isso, o sistema será organizado para que o aplicativo seja completo, sejam feitos, também, testes que corroborem suas funcionalidades de acordo com o objetivo inicial. A descrição de cada fase por meio dos tópicos será abordada nos capítulos três e quatro que conterá respectivamente a Descrição do Sistema e o Projeto de Software ou Sistema.
Serão utilizados os seguintes assuntos:

Programação Orientada a Objeto (POO)

Programação Orientada a Objetos é um paradigma de programação que se baseia na ideia de objetos, que podem conter dados e funcionalidades, e na interação entre esses objetos através de troca de mensagens. Os objetos são entidades que possuem atributos e comportamentos. Eles são representações abstratas de entidades do mundo real ou conceitos do domínio do problema a ser resolvido. (WIRTH N., 1995)
A POO segue quatro princípios fundamentais: encapsulamento, herança, polimorfismo e abstração. O encapsulamento consiste em esconder os detalhes internos do objeto e fornecer uma interface controlada para interagir com ele. A herança permite criar novos objetos baseados em objetos existentes, herdam seus atributos e comportamentos. O polimorfismo permite que objetos de diferentes tipos sejam tratados de maneira uniforme, executando comportamentos específicos para cada tipo. A abstração permite criar representações simplificadas e conceituais dos objetos, focando apenas nos aspectos relevantes para o problema em questão. 
A Programação Orientada a Objetos proporciona vários benefícios, como modularidade, reutilização de código, flexibilidade, escalabilidade e manutenção. Ela ajuda a criar sistemas mais organizados, compreensíveis e extensíveis, permitindo o desenvolvimento de software de alta qualidade.

Linguagem de Modelagem Unificada (UML)

A UML (Unified Modeling Language) é uma linguagem padrão para especificar, visualizar, construir e documentar os artefatos de um sistema de software. Ela fornece uma notação visual para representar a arquitetura, o design e o comportamento de um sistema, usando uma variedade de diagramas. (OMG, s.d., 1997) 
Conforme a citação descrita anteriormente, a UML é uma linguagem comum utilizada na engenharia de software para representar sistemas de software de forma padronizada e compreensível, facilitando a comunicação entre as partes envolvidas no processo de desenvolvimento.
Os diagramas a serem utilizados serão:
Diagrama de caso de uso - o objetivo deste diagrama é demonstrar as várias formas que o usuário pode interagir com um sistema.
Diagrama de classe - são o principal componente de uma solução orientada a objetos. Nele estão contidas as classes em um sistema, os atributos e as operações de cada classe e a relação entre elas.
Diagrama de sequência - mostra como os objetos interagem uns com os outros e a ordem em que essas interações ocorrem. Neles deverão existir interações para cada cenário.

Projeto de Banco de Dados

No projeto atual, será utilizado o Banco de Dados Relacional, pois oferece uma estrutura organizada e eficiente para armazenamento e é compatível com o estudado em outros momentos pelos autores do projeto.
Um banco de dados relacional é um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre si. Bancos de dados relacionais são baseados no modelo relacional, uma maneira intuitiva e direta de representar dados em tabelas. 
Os bancos de dados relacionais foram originalmente projetados com o objetivo de separar o armazenamento físico dos dados da sua representação conceitual e prover uma fundamentação matemática para os bancos de dados. O modelo de dados relacional também introduziu as linguagens de consulta de alto nível, que são uma alternativa às interfaces para as linguagens de programação; consequentemente, ficou mais rápido escrever novas consultas. (Elmasri et al., 2005)

Sistema de Recomendação

O sistema de recomendação será utilizado para classificar os usuários segundo seus interesses em cada evento do aplicativo. Então, haverá uma conclusão baseada em dados sobre o que recomendar para esse usuário.
A definição de um Sistema de recomendação segundo Ricci (2002), é que esse sistema de filtragem de informação oferece ao usuário sugestões de itens de seu possível interesse.
	Segundo o estudo de Lamego (2011), a estrutura básica é composta por 4 etapas, enumeradas: 
Identificação do usuário; 
Coleta de informações;
Estratégias de recomendação;
Visualização das recomendações.

Aplicativo Mobile

Um aplicativo móvel, mais comumente referido como um aplicativo, é um tipo de software projetado para ser executado em um dispositivo móvel, como um smartphone ou tablet. (ROUSE, 2020) 
Os principais sistemas operacionais para dispositivos móveis nos dias atuais são o IOS, da Apple e o Android do Google. (VIVO, 2021)
	É possível desenvolver uma aplicação nativa para cada sistema operacional, através de linguagens e tecnologias nativas, porém será necessária uma base de código para cada sistema operacional. Para solucionar este dilema existe o desenvolvimento multiplataforma, que será utilizado neste projeto através de uma tecnologia chamada React Native. (Cunha, 2022)
O desenvolvimento multiplataforma é a prática de construir software compatível com mais de um tipo de plataforma de hardware, ou seja, um único código para diferentes sistemas operacionais, facilitando a vida do programador. (Cunha, 2022)
O React Native (também conhecido como RN) é uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript que permite criar aplicativos móveis renderizados nativamente para IOS (iPhone Operating System) e Android. A estrutura permite criar um aplicativo para várias plataformas usando a mesma base de código. O React Native foi lançado em 2015 pelo Facebook e hoje é utilizado por aplicativos mundialmente famosos como Discord, Tesla, Instagram, Facebook e entre outros. (Cunha, 2022)
A reutilização do código é um dos fatores principais para a escolha de um aplicativo mobile com desenvolvimento entre multiplataformas. Os desenvolvedores podem integrar facilmente 90% da estrutura nativa e reutilizar o código para qualquer plataforma. Esse recurso não apenas economiza tempo, mas também ajuda a reduzir o custo de criação de dois aplicativos. (Cunha, 2022)

Organização do Texto
	
	Este trabalho está estruturado da seguinte forma:
No capítulo 1, apresenta-se o objetivo geral e específico do trabalho, a metodologia utilizada para alcançar tais objetivos, bem como a motivação e justificativa para o desenvolvimento de uma aplicação voltada para usuários que buscam eventos próximos, com base em seu perfil.
No capítulo 2, é feita uma descrição detalhada do sistema, abordando a necessidade e a solução proposta pelo projeto.
	No capítulo 3, são apresentados os requisitos do sistema, bem como uma análise de riscos e estimativas do projeto.
	No capítulo 4, são apresentados os diagramas de casos de uso, diagramas de classe e diagramas de sequência, que ilustram visualmente o funcionamento e a interação dos elementos do sistema.
	No capítulo 5, é abordada a modelagem de banco de dados, juntamente com uma breve explanação sobre o sistema de gerenciamento de dados utilizados neste projeto, além de um dicionário de dados.
	Em seguida, no capítulo 6, é apresentada a conclusão, na qual se sintetiza o trabalho realizado e os principais resultados obtidos.
	Desta forma, a estruturação adotada neste trabalho permite uma abordagem sistemática e organizada, permitindo ao leitor compreender claramente os objetivos, a metodologia, o desenvolvimento e os resultados alcançados, baseados em uma revisão fundamentada em referências bibliográficas relevantes.

CAPÍTULO 2. FUNDAMENTAÇÃO TEÓRICA
	
Este capítulo aborda a descrição e as subseções dos assuntos escolhidos como base para o estudo e a execução do software. Com isso, o projeto dividiu-se em duas etapas: Estudo sobre as técnicas que estão relacionadas à dispositivos móveis e à inteligência artificial, e diagramas UML (Linguagem de Modelagem Unificada) para observar e limitar o escopo; e, por último, desenvolvimento do projeto mobile e da IA (Inteligência Artificial).

2.1	Dispositivos móveis


Os dispositivos móveis, como smartphones e tablets, têm desempenhado um papel de destaque na sociedade contemporânea, impulsionados pelos avanços tecnológicos e pelo desenvolvimento de ferramentas e softwares de alto desempenho. Esses dispositivos têm se mostrado cada vez mais populares, com o acesso à internet por meio de smartphones superando o uso de computadores em alguns países, como no caso do Brasil. (IBGE, 2011)
A tecnologia móvel tornou-se um dos principais meios de comunicação e experimentou um rápido desenvolvimento, impulsionado pela elevação das redes sociais e pela mobilidade dos dados. A demanda por maior facilidade na comunicação e uso da internet levou ao surgimento de ferramentas inovadoras, como smartphones e tablets, que oferecem uma ampla gama de funcionalidades, incluindo fotos, vídeos, aplicativos e muito mais. (PATRIOTA, 2015)
	Uma das principais características da tecnologia móvel é a sua portabilidade, permitindo que os usuários estejam sempre conectados, independentemente de sua localização geográfica. Essa mobilidade tem um impacto significativo na forma como o ser humano comunica-se e absorve informações. Agora, podem ser feitas chamadas telefônicas, envio de mensagens, navegação na internet, compartilhamento de fotos e vídeos, e até mesmo transações financeiras, tudo por meio de um único dispositivo compacto e portátil.
	
	Em resumo, os dispositivos móveis representam uma revolução tecnológica que está moldando o presente e o futuro, segundo a Secretaria de Estado da Educação do Paraná (2014) essa tecnologia foi capaz de atingir o cotidiano das pessoas, modificando suas rotinas e formas de tomar decisões. Com sua capacidade de conectividade, portabilidade e funcionalidades avançadas, desempenham um papel essencial na vida cotidiana, impulsionando a comunicação, a produtividade e o acesso à informação. À medida que a sociedade continua a avançar em um mundo cada vez mais conectado.

2.2	Usabilidade


Usabilidade é definida como a facilidade de uso de uma interface ou sistema, que permite ao usuário navegar sem inseguranças e realizar ações desejadas. Além disso, a usabilidade também se relaciona com a funcionalidade da interface, ou seja, a capacidade de resolver as necessidades do usuário. (Editorial Aela)
A usabilidade no dia a dia é exemplificada por uma situação em que um usuário tenta comprar roupas em um aplicativo de e-commerce, mas encontra dificuldades na finalização do checkout. Isso ilustra que a facilidade de uso não é suficiente se não estiver alinhada com as necessidades do usuário. (Editorial Aela)
A importância da usabilidade no design é ressaltada, e é mencionado que a Apple foi pioneira ao priorizar a experiência do usuário em seus produtos. A evolução da usabilidade ao longo dos anos é evidenciada por meio de estudos que mostram a redução da taxa de erros em interfaces. (Editorial Aela)
São apresentados os cinco componentes da usabilidade: aprendizagem, eficiência, memorabilidade, erros e satisfação. Esses componentes são essenciais para garantir uma melhor experiência ao usuário e devem ser considerados no desenvolvimento de projetos. (Editorial Aela)
Além disso, são mencionadas as principais métricas de usabilidade, como a taxa de sucesso, o tempo necessário para concluir uma tarefa, a taxa de erro e a satisfação subjetiva dos usuários. Essas métricas permitem avaliar a utilidade e a facilidade de uso de um produto ou serviço. (Editorial Aela)
A usabilidade é destacada como uma questão de sobrevivência, pois usuários tendem a desistir rapidamente de utilizar uma interface que não atenda suas necessidades. Investir em usabilidade pode impactar positivamente o negócio, proporcionando fidelização de clientes, redução de custos e democratização da tecnologia. (Editorial Aela)
Em resumo, a fundamentação teórica aborda o conceito de usabilidade, sua importância no design de interfaces e os componentes e métricas que devem ser considerados para garantir uma melhor experiência ao usuário. Também destaca a evolução da usabilidade ao longo dos anos e o impacto positivo que investir em usabilidade pode ter no negócio.

2.3	Inteligência Artificial


No presente tópico serão abordados os contextos da Inteligência Artificial (IA), introduzindo sobre sua literatura e conceitos. Serão expostas de forma mais abrangente as estruturas da IA nessa seção, subsequentemente, será abordado, restritamente, sobre um subtópico da inteligência artificial que é Aprendizado de Máquina e quais são suas vertentes.
Nos últimos tempos, à medida que os sistemas computacionais avançaram e se desenvolveram desde o século XX, houve um crescente questionamento nos estudos da inteligência sobre a possibilidade de os computadores exibirem comportamentos que possam caracterizar-se como “inteligência”. Nisso, surgiram algumas definições do que pode significar esse substantivo para o assunto abordado, então diversos pesquisadores procuram definir o que é a Inteligência até os dias atuais, porém não há concordância, podendo utilizar-se de muitas definições. (LIMA, PINHEIRO & SANTOS, 2014)
Segundo Lima, Pinheiro e Santos (2014), os quais afirmam que a Inteligência Artificial é o conjunto de ações que, caso fosse executada por um ser humano, seriam consideradas nitidamente inteligentes. Essa comparação feita, entre o Homem e a máquina, define o pensamento sobre essa vertente.
Para Poole et. al.(1998), Inteligência Computacional é o estudo do projeto de agentes inteligentes e Lobo (2018) define a inteligência Artificial como um ramo da ciência da computação, o qual usa algoritmos definidos por especialistas para reconhecer um problema, ou uma tarefa a ser realizada, analisando dados e tomando decisões, com isso, simulando a capacidade humana.

Algumas definições medem o sucesso em termos de fidelidade ao desempenho humano, enquanto outras medem o sucesso comparando-o a um conceito ideal de inteligência, chamado de racionalidade. Em um sistema racional se “faz a coisa certa”, dado o que ele sabe. (RUSSELL & NORVING, 2020)
Russell e Norvig (2013) ponderam sobre a inteligência artificial ser a capacidade dos sistemas cibernéticos de imitar funções cognitivas dos seres humanos, as quais são resumidas na resolução de problemas por meio do aprendizado apoiado na percepção. É importante analisar os três termos chave da definição anterior:
Resolução de Problemas - É a capacidade de executar tarefas corretamente, segundo um parâmetro de avaliação. Uma máquina pode resolver problemas com técnicas de programação e algoritmos;
Aprendizado - O aprendizado de máquina consiste em um algoritmo ajustar seus parâmetros internos com dados gerados em execuções anteriores, atingindo melhores resultados a cada execução; (OLIVEIRA, 2018)
Percepção - A percepção, no caso dos sistemas cibernéticos, vai desde a leitura de dados por um software, até sensores físicos, isto é, que interagem com o ambiente, como no caso de sensores de som, termômetros, medidores de intensidade luminosa, entre outros. (RUSSEL & NORVIG, 2013)
Em suma, a inteligência artificial dá insumos para o aprofundamento de pesquisa e aprendizado, ela está inserida em diversos domínios, desde assistentes virtuais em dispositivos móveis até sistemas de recomendação que são utilizados por muitas empresas como a Google, a Netflix, entre outros. Desempenhando, assim, um papel importante na otimização de processos, automação de tarefas, personalização de experiências e criação de soluções inovadoras em diferentes setores.

2.4	Aprendizado de Máquina

Aprendizado de Máquina (Machine Learning) é uma subárea de Inteligência Artificial cujo objetivo é o desenvolvimento de técnicas computacionais sobre o aprendizado bem como a elaboração de sistemas que são capazes de adquirir conhecimento de forma automática, a partir de dados. Um sistema de aprendizado, em sua definição, é um software que realiza escolhas com base em conteúdos acumulados por meio da resolução bem-sucedida de problemas anteriormente consumidos. (MONARD & BARAUNAUSKAS, 2003)
	Segundo Coelho (2020), as ferramentas de machine learning têm como objetivo gerar soluções com a habilidade de “aprender” e “adaptar”. Então, pode-se compreender esse tópico como uma ramificação, ou junção da estatística e computação, que reúne métodos com a finalidade de automatizar processos de aprendizado.
	Como visto no tópico anterior, o aprendizado de máquina é parte de um processo de avaliação de dados, porém, Monard & Baraunauskas (2003), alertam que, apesar da ferramenta ser poderosa nessa coleta automática de informações, não existe um único algoritmo que apresente o melhor desempenho para todos os problemas. Seguindo essa linha de raciocínio, constata-se que cabe um estudo de caso para que seja usada a melhor ferramenta para o problema apresentado.
	Para este trabalho será usado um dos mecanismos baseados em Machine Learning (Aprendizado de Máquina) e Artificial Intelligence (Inteligência Artificial), o qual é chamado de Sistemas de Recomendação. Esse mecanismo utiliza-se de dados históricos, que é a informação armazenada sobre as preferências e pesquisas do cliente, aplicando um algoritmo que tem como objetivo final uma recomendação. (MANA & SASIPRABA, 2021)
CAPÍTULO 3. ANÁLISE DE MERCADO / ANÁLISE DA EMPRESA

3.1	Introdução à Análise de Mercado para o Software

A análise de mercado visa examinar fatores como a demanda do público-alvo, concorrência existente, tendências do setor e oportunidades emergentes. No caso específico deste aplicativo móvel, a motivação inicial é atender a uma demanda real dos usuários por uma solução personalizada e eficiente na busca por eventos (Locaweb, 2022).
Ao explorar as tendências do mercado de aplicativos móveis, observa-se que a personalização e a relevância são elementos-chave para o sucesso. Os usuários buscam experiências adaptadas às suas preferências individuais, e a capacidade do aplicativo em fornecer recomendações precisas alinhadas ao perfil de cada usuário é um diferencial estratégico (ABREU, 2020).
A expansão do mercado de aplicativos móveis oferece uma janela de oportunidade para inovações e soluções que abordem lacunas existentes. O presente trabalho não apenas busca criar um aplicativo, mas também estabelecer uma nova abordagem na forma como as pessoas se conectam e participam de eventos.
Ao longo da análise de mercado, será crucial considerar as dinâmicas sociais, culturais, mercado e público alvo que podem influenciar a adoção e aceitação do aplicativo em diferentes aspectos. A compreensão desses aspectos contribuirá para a adaptação do aplicativo às diversas necessidades e preferências dos usuários.

3.2 	Definição do Mercado-Alvo para o Software

Para ter sucesso no mercado competitivo atual, as empresas devem estar centradas no cliente, conquistando e entregando valor. Porém, antes de poder satisfazer os consumidores, é preciso compreender as suas necessidades e desejos. (KOTLER & ARMSTRONG, 2005)
Foram coletados dados por meio de uma pesquisa, estruturada com perguntas e respostas para definição de um público alvo, relevância de estudo, etc. Esta análise deve apoiar o processo de elaboração e o estudo do software, focando em um mercado alvo específico para o produto, pautando decisões futuras em dados.
Segundo Oliveira & Tortato (2008), é um desafio enfrentado pelos gestores ofertar a solução para o público adequado, para que seja alcançada a posição de destaque entre outras marcas. Com base nisso, a pesquisa feita por parte dos autores, encontrou como público alvo, em sua maioria, uma faixa etária de pessoas entre 17 a 25 anos, conforme representado na figura 1.

Figura 1 - Pergunta 9 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

Figura 2 - Pergunta 6 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

O gráfico, na figura 2, apresenta os resultados de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023, com o objetivo de identificar o tipo de consumidor do software. A pesquisa contou com 163 respondentes, que foram questionados sobre a seguinte pergunta: “Você gostaria de um aplicativo que ajudasse a encontrar eventos com maior facilidade, entendendo o seu perfil e te recomendando eventos que sejam ideais para você?”.
Dos 163 respondentes, 159 (97,5%) responderam que sim, gostariam de um aplicativo com essas características. Apenas 4 (2,5%) responderam que não gostariam.
Com base nesses resultados, é possível destacar as seguintes análises:
A grande maioria dos consumidores de software está interessada em aplicativos que possam facilitar a sua vida, oferecendo recomendações personalizadas. Esse resultado é importante para os desenvolvedores de software, pois indica que há uma demanda por aplicativos que possam oferecer uma experiência mais personalizada aos usuários.
O aplicativo em questão, que tem como objetivo ajudar os usuários a encontrar eventos, parece ser um produto com potencial de sucesso. Isso porque a grande maioria dos respondentes demonstrou interesse em um aplicativo com essas características.
A segmentação por gênero corrobora o conhecimento sobre o público alvo, portanto, o gráfico abaixo, que mostra a distribuição de gênero dos respondentes, é relevante pelo fato de que o tópico definido como mercado-alvo para o software, pois terá informações sobre os usuários potenciais do software, além das apresentadas anteriormente.

Figura 3 - Pergunta 8 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

No caso específico deste gráfico, os resultados mostram que a maioria dos respondentes (65,7%) são mulheres, enquanto 33,6% são homens e outros 0,7% são não binário. Isso sugere que o software pode ser mais atraente para mulheres do que para homens.
É importante considerar esses dados ao definir o mercado-alvo do software. Por exemplo, se o software for direcionado a um público amplo, é importante garantir que ele seja acessível e atraente para ambos os gêneros. Se o software for direcionado a um público específico, é importante garantir que ele atenda às necessidades e interesses desse público.

3.3	Análise de Tendências no Desenvolvimento de Software

Ao analisar as tendências no desenvolvimento de software, fica evidente que o setor está passando por transformações significativas impulsionadas pela rápida evolução tecnológica e pelas demandas em constante mudança do mercado. Algumas tendências emergem como forças motrizes que estão moldando a forma como o software é concebido, construído e implantado.
	Inteligência Artificial e Aprendizado de Máquina: A integração de inteligência artificial e aprendizado de máquina continua a ser uma tendência dominante. Aplicações inteligentes, análise preditiva e automação impulsionam a eficiência e a personalização em várias indústrias (Sydle, 2022)
Computação em Nuvem: A computação em nuvem mantém sua posição como uma tendência central. A migração para plataformas em nuvem oferece escalabilidade dinâmica, redução de custos e agilidade no desenvolvimento (Sydle, 2022).
Metodologias Ágeis e DevOps: A metodologia ágil continua sendo prevalente, permitindo respostas rápidas a mudanças nos requisitos. A integração eficaz de desenvolvimento e operações (DevOps) é essencial para ciclos de entrega mais rápidos (Sydle, 2022).
Automação de Processos: A automação de processos, desde o desenvolvimento até os testes, ganha destaque. A automação melhora a eficiência, reduz erros e acelera os cronogramas de entrega (Sydle, 2022).
Um dos pontos fundamentais da Transformação Digital é o uso extensivo de dados (tanto sua coleta quanto análise) para dirigir negócios. Estas informações preciosas podem guiar estratégias de negócio, como desenvolvimento ou cancelamento de funcionalidades, segmentação de mercado nos mais diversos critérios (FERNANDES, 2020).
Essas tendências não são isoladas, muitas vezes interconectando-se para impulsionar inovações mais amplas. A compreensão e a adaptação a essas mudanças são imperativas para os profissionais de desenvolvimento que buscam criar software relevante, eficiente e seguro. O foco contínuo na evolução tecnológica e na compreensão das necessidades do mercado são essenciais para permanecer na vanguarda do desenvolvimento de software.

3.4	Análise da Concorrência

A análise da concorrência possibilita a empresa conhecer os seus competidores, pois compreender os clientes não é o suficiente, então o mercado demonstra que prestar atenção aos concorrentes é tão importante quanto analisar seu público-alvo. A comparação entre seus produtos, preços, canais e promoções deve ser constantemente revisitada. Com isso,  a empresa pode localizar potenciais áreas de vantagem e desvantagem competitiva. (KOTLER & ARMSTRONG, 2005)
Portanto, a apresentação e relevância de estudo sobre os competidores se faz necessária e é representada pelos principais concorrentes, que incluem Sympla, Eventbrite e Fever, a seguir o detalhamento dos competidores no mercado:
Sympla
Logo da marca:

Figura 4 - Logo Sympla

Fonte: Sympla
Pontos Fortes:
Facilidade de uso - A interface do produto é amigável, o que facilita na organização dos eventos e no momento de compra dos ingressos.
Variedade de eventos - O aplicativo oferece suporte a diversos tipos de eventos, desde conferências e workshops até festivais e shows, proporcionando uma ampla gama de opções para organizadores e participantes.
Integração com outras plataformas - É oferecido o serviço de compartilhamento nas redes sociais, permitindo ao usuário ampliar o número de pessoas a visualizar e tomar conhecimento sobre o evento.
Pontos Fracos:
Taxa e Custos - As taxas da Sympla são consideradas relativamente altas, o que poderia afetar a rentabilidade do evento ou aumentar o preço dos ingressos para os participantes.
Personalização Limitada - A capacidade de personalização da página de eventos é limitada.
Avaliação do Usuário na Google Play: 
3,5 estrelas.
Eventbrite
Logo da marca:

Figura 5 - Logo Eventbrite

Fonte: Google Play - Eventbrite
Pontos Fortes: 
Variedade de Recursos - Tem uma ampla gama de recursos, incluindo ferramentas de promoção, integração com redes sociais, opção de seguir o responsável pelo evento e encontrar outros eventos do mesmo anunciante.
Aplicativo Móvel - Permite que organizadores e participantes acessem informações e gerenciem eventos em movimento, proporcionando conveniência.
Pontos Fracos:
Suporte ao Cliente - A página de reclamações do Reclame Aqui apresenta uma avaliação negativa para o aplicativo, pois a taxa de resposta aos usuários é insuficiente.
Dependência de Conectividade - Como uma plataforma online, a dependência de estar conectado à internet pode ser um desafio em locais com conexões instáveis.
Avaliação do Usuário na Google Play: 
4,4 estrelas.
Fever
Logo da marca:
Figura 6 - Logo Fever

Fonte: Google Play - Fever
Pontos Fortes:
Interface Amigável - O aplicativo é de fácil compreensão, o que torna a navegação e busca por eventos simples para os usuários.
Ofertas e Promoções - Frequentemente oferece promoções e descontos em eventos, o que pode ser atrativo para o usuário.
Pontos Fracos:
Disponibilidade Limitada - Em algumas cidades, a disponibilidade de eventos na Fever pode ser limitada em comparação com áreas urbanas ou culturalmente ricas.
Variedade de eventos - Embora ofereça uma variedade de eventos culturais, a necessidade do usuário é uma gama maior de diversidade das atividades.
Avaliação do Usuário na Google Play: 
4,7 estrelas.

3.5	Análise SWOT para o Software

Análise SWOT (Strengths - Weaknesses - Opportunities - Threats) é uma ferramenta de planejamento estratégico usada para analisar e avaliar os pontos fortes, fracos, de oportunidade e de ameaça que os projetos e empreendimentos de negócios enfrentam e, assim, ajuda a identificar possíveis estratégias para alcançar objetivos predefinidos. (SHAHIR et. al, 2008)
Concernente a um software, a Análise SWOT é uma ferramenta eficaz para avaliar o posicionamento do software no mercado e ajudar na formulação de estratégias.

   3.5.1	Forças (Strengths)

Funcionalidades Distintivas:
Recomendação de eventos personalizados;
Gerenciamento de eventos;
Capacidade de encontrar eventos próximos;
Facilidade de Uso:
Interface de usuário projetada para ser de fácil usabilidade;
Usuário consegue entrar e se cadastrar no aplicativo com menos de três cliques;
Integração com Outras Ferramentas:
OpenAI;
Receita WS - para verificar autenticidade de CNPJ;
ViaCep - busca de endereço por CEP;
Supabase.

   3.5.2	Fraquezas (Weaknesses)

Bugs e Problemas Técnicos:
Falta de monitoramento para ativos críticos;
Sobrecarga no sistema pela alta demanda;
Demora na obtenção de atualizações de ferramentas;
Possíveis bugs não identificados no sistema inicial.
Dependência de Tecnologias Específicas:
A autenticação do software é feita somente com a conta Google.
Supabase: O Supabase é fundamental para o funcionamento do aplicativo, pois é lá que está a base de dados.

   3.5.3	Oportunidades (Opportunities)

Parcerias Estratégicas: Capacidade de trazer eventos de outros serviços para alimentar a base de dados;
Atualizações de Tecnologia: Possibilidade de aumentar velocidade e desempenho do aplicativo;
Demandas do Mercado: Tendência dos usuários utilizarem o aplicativo para propósitos segmentado;

   3.5.4	Ameaças (Threats)

Concorrência Crescente
Rápida Obsolescência Tecnológica:
Atualização constante de sistemas e ferramentas.
Vulnerabilidades de Segurança:
Identificação tardia de vulnerabilidades nas soluções do sistema;
Dependência de outras plataformas que armazenam dados sensíveis.

3.6	Comportamento do Consumidor de Software
	
O modo como o comprador se conduz é descrito como uma série de ações que uma pessoa realiza ao buscar, avaliar, adquirir e utilizar um produto ou serviço para atender a uma necessidade ou desejo. Dentro desse contexto, a finalidade global desta pesquisa busca compreender o comportamento e o processo de tomada de decisão do usuário de software, descrevendo as características e padrões, como também, as circunstâncias de consumo e posturas em relação aos atributos do software, por meio de informações primárias. (WILKIE, 1994)
É importante considerar os dados ao entender o comportamento do consumidor. A exemplo disso podemos qualificar o comportamento do consumidor por meio da pesquisa executada pelos autores do presente documento, o qual contém as seguintes informações:
Primeiramente, apresenta-se o caso do gráfico, da figura 5, os resultados mostram que os eventos mais populares são shows (62%), atividades culturais (61,3%) e eventos esportivos (44,2%). Isso sugere que os consumidores estão interessados ​​em atividades de entretenimento e lazer.

Figura 7 - Pergunta 1 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

Segundo os respondentes da pesquisa, nas figuras 8 e 9, suas preferências de recursos são sobre a facilidade de acesso, encontrar eventos de acordo com seu perfil e interesse, como também, a forma que o usuário encontra esses eventos, o que mostra uma forte referência às redes sociais e menos aos aplicativos existentes.

Figura 8 - Pergunta 5 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

Figura 9 - Pergunta 4 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

Uma das dimensões importantes do comportamento do consumidor é a frequência de uso. A frequência com que os consumidores usam um produto pode indicar o seu nível de satisfação com o produto e o seu potencial de sucesso no mercado.

Figura 10 - Pergunta 2 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

O gráfico apresentado, na figura 10, mostra a frequência com que os consumidores frequentam eventos. Os respondentes foram questionados sobre a seguinte pergunta: ”Com que frequência você vai a eventos?”
Dos 163 respondentes, 57 (35,2%) responderam que vão a eventos entre 3 e 5 vezes por semana. 38 (23,3%) responderam que vão a eventos entre 1 e 3 vezes por semana. 28 (17,2%) responderam que vão a eventos pelo menos 1 vez por semana. E 30 (18,4%) responderam que vão a eventos menos de 1 vez por semana. Com base nesses resultados, é possível realizar as seguintes análises:
A frequência média de eventos que os consumidores frequentam é de 2,2 vezes por semana. Esse resultado indica que os consumidores estão interessados em participar de eventos com frequência.
A maioria dos consumidores (68,5%) frequenta eventos pelo menos uma vez por semana. Esse resultado indica que os consumidores estão interessados em participar de eventos com regularidade.
Os eventos mais frequentados pelos consumidores são eventos sociais, culturais e esportivos. Esse resultado indica que os consumidores estão interessados em participar de eventos que sejam divertidos e enriquecedores.

3.7	Análise de Preços e Modelos de Licenciamento

A estratégia de monetização adotada para o aplicativo destaca-se por sua abordagem flexível, buscando equilibrar a geração de receita com a entrega contínua de valor aos usuários. A proposta envolve a implementação de diferentes modelos para atender às diversas necessidades e expectativas dos usuários.
Optou-se por oferecer o aplicativo gratuitamente a todos os usuários, estabelecendo assim uma base sólida de usuários. Paralelamente, serão introduzidos recursos premium que aprimoram a experiência do usuário. Os usuários terão a opção de realizar assinaturas mensais ou anuais para desbloquear esses recursos premium, como acesso antecipado a eventos, filtros avançados de busca e benefícios exclusivos em determinados eventos.
Para os Gerentes de Eventos, a estratégia contempla um modelo freemium. O cadastro de eventos será gratuito, mas serão oferecidos pacotes premium que incluem funcionalidades adicionais, como destaque na página inicial do aplicativo, métricas detalhadas de desempenho e opções de promoção personalizada. Essa abordagem visa oferecer aos organizadores de eventos uma visibilidade ampliada e ferramentas poderosas para aprimorar suas iniciativas.
A integração de publicidade contextual no aplicativo é uma medida cuidadosa, garantindo que os anúncios sejam relevantes e não intrusivos. A exibição de anúncios estrategicamente posicionados oferece uma fonte adicional de receita, mantendo a experiência do usuário positiva ao alinhar os anúncios com seus interesses e preferências.
Outro elemento importante na estratégia de monetização é a busca por parcerias e patrocínios. Estabelecer colaborações estratégicas com empresas e marcas afins ao público-alvo possibilitará acordos de patrocínio para eventos específicos, promoções conjuntas e ofertas exclusivas. Essas parcerias não apenas contribuem para a receita direta, mas também enriquecem a experiência dos usuários com benefícios especiais e conteúdo exclusivo.
Em resumo, a estratégia de monetização adotada reflete a busca por uma abordagem diversificada que visa atender às diferentes necessidades e expectativas dos usuários, garantindo simultaneamente uma geração sustentável de receita para o aplicativo.

3.8	Canais de Distribuição para o Software

A estratégia de canais de distribuição para software é crucial para garantir que o produto alcance efetivamente seu público-alvo, conforme afirma a empresa Geofusion (2023), é preciso garantir que os produtos sejam acessíveis nos canais mais adequados ao produto. Os canais de distribuição referem-se aos métodos pelos quais o software é disponibilizado e entregue aos usuários finais. Portanto, o canal de distribuição alvo será a Play Store que viabiliza os aplicativos para o público.

3.9	Regulamentações e Normas no Desenvolvimento de Software

Segundo a Emenda Constitucional nº 115 (EC115), promulgada no ano de 2022 pelo Congresso Nacional, é garantido que a proteção de dados sensíveis está incluída na categoria de direitos fundamentais da Constituição Federal de 1988. Portanto, é notável que, conforme o Plano de Diretrizes para Conformidade à Lei Geral de Proteção de Dados Pessoais (GOV.BR, 2022), as regulamentações devem ser cumpridas pelas empresas para que não haja violação de privacidade.
O aplicativo procura estar em conformidade com a LGPD, para isso utiliza-se a conta google do usuário que é um método seguro e rápido para efetuar o cadastro, como também, ter a responsabilidade ética e um mapeamento de processos para tratamento de dados pessoais de seus usuários.

3.10	Projeções de Mercado para o Software

A ABES, que é a Associação Brasileira das Empresas de Software, juntamente com a International Data Corporation (IDC), divulgou o Estudo do Mercado Brasileiro de Software para o ano de 2023. Os dados fornecidos pela IDC e analisados pela ABES indicam que o Brasil representou 1,65% dos investimentos globais em tecnologia, mantendo-se como responsável por 36% dos investimentos em toda a América Latina (uma queda em relação aos 40% registrados na pesquisa anterior). Ao considerar o montante total de investimentos globais em tecnologia da informação, que atingiu US$ 3,11 trilhões em 2022 (um aumento em relação aos US$ 2,79 trilhões registrados anteriormente), o Brasil perdeu duas posições no ranking global, agora ocupando o décimo-segundo lugar com investimentos de US$ 45,2 bilhões. Apesar disso, o país lidera na América Latina, onde os investimentos totais atingiram US$ 124 bilhões (em comparação com os US$ 115 bilhões em 2021).
Uma das principais tendências que impulsionam o crescimento do mercado de software é a crescente demanda por aplicativos e serviços que possam facilitar a vida dos consumidores. Nesse contexto, é importante analisar as dificuldades que os consumidores enfrentam ao encontrar eventos relevantes.
A pesquisa de opinião realizada identificou uma das principais dificuldades que os consumidores enfrentam ao encontrar eventos relevantes, mostrou que a grande maioria dos consumidores (72,1%) possui dificuldade em encontrar eventos relevantes. As principais dificuldades relatadas pelos consumidores são a falta de informação sobre eventos relevantes e a dificuldade de encontrar eventos que sejam adequados ao seu perfil.
A pesquisa contou com 163 respondentes, que foram questionados sobre a seguinte questão, representada na figura 11: “Você possui dificuldade em encontrar eventos relevantes (do seu interesse)?”.

Figura 11 - Pergunta 3 - Pesquisa

Fonte: Dados coletados por meio de uma pesquisa de opinião realizada entre os meses de outubro e novembro de 2023. O autor (2023)

Dos 163 respondentes, 117 (72,1%) responderam que sim, possuem dificuldade em encontrar eventos relevantes. Apenas 46 (28,9%) responderam que não possuem dificuldade.
Com base nesses resultados, é possível realizar as seguintes análises:
A maior parte dos respondentes possui dificuldade em encontrar eventos relevantes. Esse resultado é importante, pois indica que há uma demanda e a solução atende boa parte das necessidades do usuário.
As principais dificuldades relatadas pelos consumidores são a falta de informação sobre eventos relevantes e a dificuldade de encontrar eventos que sejam adequados ao seu perfil. Esses resultados indicam que os consumidores estão interessados em aplicativos ou serviços que possam oferecer uma experiência mais personalizada.
Esses resultados indicam que há uma demanda por aplicativos ou serviços que possam facilitar a busca por eventos relevantes. Os desenvolvedores de software que puderem atender a essa demanda terão uma oportunidade de crescimento no mercado.

CAPÍTULO 4. PROJETO DE SOFTWARE/SISTEMA OU SOLUÇÃO PROPOSTA

4.1	Propósito do Aplicativo

A solução proposta visa atender à crescente demanda por uma experiência personalizada na busca e participação em eventos. O aplicativo foi desenvolvido para proporcionar aos usuários a experiência de explorar cidades e descobrir experiências que estejam alinhados com suas escolhas pessoais e estejam de acordo com o seu perfil.

4.2	Arquitetura do Projeto

A arquitetura do projeto é robusta, fundamentada em um backend como serviço, especificamente o Supabase. O frontend, desenvolvido em React Native, se comunica com esse serviço por meio de uma API REST (Representational State Transfer). Para armazenamento de dados é utilizado um banco de dados relacional PostgreSQL, que já está integrado com o serviço de backend. Um sistema em Python também integra a API, permitindo a consulta de dados pelo frontend para exibição dos principais eventos preferidos pelos usuários.

4.3	Funcionalidades Atuais

O sistema atual oferece diversas funcionalidades aos usuários, incluindo a capacidade de buscar, favoritar e confirmar presença em eventos. Os usuários que se registram como Gerentes de Eventos têm a permissão de cadastrar novos eventos na plataforma.
A busca personalizada de eventos é uma característica central do aplicativo, permitindo aos usuários buscar eventos por nome e proximidade geográfica. Isso proporciona uma experiência flexível e adaptada aos interesses individuais de cada usuário.
As interações dinâmicas com eventos enriquecem a participação do usuário. A capacidade de marcar eventos como favoritos e confirmar presença não apenas envolve os usuários, mas também fornece dados valiosos para o processo de geração de recomendações personalizadas.

Figura 12 - Página Inicial do Aplicativo

Fonte: Aplicativo criado pelos autores. O autor (2023)

4.4	Localização e Pesquisa de Eventos

O sistema busca eliminar limitações geográficas, permitindo que os usuários explorem eventos em qualquer localidade. Essa liberdade geográfica amplia as possibilidades dos usuários, proporcionando a descoberta de eventos em diversas partes do mundo.
Com base na localização do usuário, durante a pesquisa de eventos, o aplicativo indica eventos que ocorrerão nos próximos dias, bem como os eventos do dia da pesquisa. No entanto, a disponibilidade de eventos ainda está limitada ao cadastramento feito pelos Gerentes de Eventos, devido à falta de integração com outras APIs que possam fornecer dados adicionais.

4.5	Uso de Dados e Sistema de Recomendação

Os dados utilizados pelo sistema são gerados pelos próprios usuários, independentemente de serem gerentes de eventos ou não. Esses dados alimentam um Sistema de Recomendação, que retorna eventos mais semelhantes aos que o usuário interagiu anteriormente.
O serviço em Python utiliza algoritmos de análise de dados para compreender as preferências dos usuários com base nessas interações passadas. Especificamente, o serviço externo da OpenAI que foi utilizado para o recurso dos embeddings pré-treinados chamado “text-embedding-ada-002”.
Segundo Almeida e Xexéo (2019), embeddings são representações vetoriais de comprimento fixo para palavras. Esses vetores de incorporações, medem o relacionamento das strings de texto e, conforme a documentação da OpenAI (2023), são utilizadas para:
Clustering - É uma aglomeração ou agrupamento de strings de texto por similaridade;
Recomendações - São recomendados itens com sequências de textos relacionadas, as quais utilizam dados históricos baseados em preferências do usuário ou dados que são incluídos pelo usuário como é feito em um onboarding, caminho inicial do usuário ao inserir informações, e por fim sugerir novos itens.
Search - Resultados que são classificados por relevância para uma string de consulta.
Medição de diversidade - Distribuições de similaridade que são analisadas no modelo;
Classificação - Função onde as palavras são classificadas pela semelhança. O processo inclui retirar símbolos e acentuação do texto, converter cada lexema em sua forma canônica, isto é, retroceder ao radical e aplicar o modelo na lista de termos.
Detecção de anomalias - É o processo de identificar valores discrepantes e com pouca similaridade entre si.
Para o referido sistema, foram incorporados os embeddings para recomendações personalizadas para o usuário. O modelo da OpenAI funciona de maneira que a lista de palavras, as quais são os dados de entrada do usuário, seja calculada em vetores, os quais são formados pelo conjunto tag, título e descrição do evento. Com isso, o próximo passo a ser aplicado é a similaridade do cosseno, a qual é uma métrica amplamente implementada na recuperação de informações e estudos relacionados. (OpenAI, 2023)
Esta métrica modela um texto como um vetor de termos, pelo modelo pré-treinado, a semelhança entre duas frases pode ser derivada calculando o valor do cosseno entre os vetores de palavras, exemplo da figura 12. Portanto, será verificada a pontuação de semelhança entre os termos e recomendar aqueles com o maior parâmetro. (ALMEIDA & XEXÉO, 2019)

Figura 13 - Fórmula de Similaridade do Cosseno

Fonte: LAMFO - Laboratório de Aprendizado de Máquina em Finanças e Organizações

4.6	Validação de Gerentes de Eventos

Para se tornar um gerenciador de eventos é necessário passar por uma validação automática que consolida se o usuário é uma pessoa física ou pessoa jurídica verídica.
	Os usuários que se identificarem como pessoa jurídica precisam comprovar e validar seu CNPJ, garantindo a legitimidade dos eventos cadastrados na plataforma. Após o preenchimento do número de identificação, o sistema realiza uma consulta na API da Receita WS, que é um método para recuperar as informações de uma empresa por meio do seu CNPJ, para verificar se é válido ou não segundo o retorno de informações, os quais contém os dados da Receita Federal Brasileira, conforme indica a documentação disponibilizada pela empresa. Caso seja válido, o usuário confirma as informações e prossegue para a tela seguinte.
Para usuários que se identificarem como pessoa física é necessário informar o CPF, dado essa informação o sistema realiza o mesmo processo de quando é um CNPJ.

4.7	Diversidade de Usuários

O aplicativo não apenas atende, mas celebra a diversidade de usuários, proporcionando uma experiência verdadeiramente personalizada e adaptada a cada indivíduo. Ao mergulhar nas interações e preferências exclusivas de cada usuário, o aplicativo transcende a abordagem genérica, criando uma jornada única para cada pessoa.
A adição estratégica de Gerentes de Eventos não apenas expande, mas transforma radicalmente a paisagem de eventos na plataforma. Essa inclusão não é apenas sobre aumentar a quantidade, mas sim sobre enriquecer a qualidade e a variedade de eventos disponíveis. Os Gerentes de Eventos tornam-se catalisadores de uma experiência ainda mais rica e diversificada, contribuindo para a criação de um ecossistema vibrante e dinâmico.

4.8	Desafios e Futuras Integrações

Neste momento, o desafio central está relacionado à restrição no número de eventos cadastrados, uma vez que não há uma integração completa com outras APIs. Contudo, é importante destacar que as oportunidades para o futuro são vastas e promissoras. As futuras integrações têm o potencial de revolucionar a plataforma, ampliando significativamente a diversidade e quantidade de eventos disponíveis.
Ao superar as atuais limitações e incorporar novas fontes de dados por meio de interações estratégicas, o horizonte de possibilidades para os usuários se torna praticamente ilimitado. Essas futuras expansões não apenas resolverão os desafios atuais, mas também elevarão a experiência dos usuários a um nível mais abrangente e enriquecedor.
A visão é transformar essa plataforma em um hub completo de eventos, abarcando uma gama ainda mais ampla de atividades e interesses. Com cada nova integração, a plataforma se tornará um ecossistema dinâmico, oferecendo uma experiência holística e personalizada para usuários ávidos por explorar e participar de eventos em constante evolução.
Em resumo, as limitações atuais são vistas como oportunidades de crescimento. O potencial para integrações futuras não apenas resolverá os obstáculos existentes, mas também abrirá novos horizontes, consolidando a plataforma como um guia abrangente e dinâmico para eventos. O compromisso é proporcionar aos usuários uma experiência que transcenda as expectativas, moldando o futuro da interação com eventos por meio de uma abordagem inovadora e expansiva.

CAPÍTULO 5. DIAGRAMAS DO SISTEMA

	Diagramas de sistemas são uma técnica de modelagem usada para descrever e visualizar um sistema em termos de seus componentes, processos, fluxos de dados e interações. Conforme Guedes, os objetivos dos diagramas de UML são de auxiliar na definição das características do software, bem como seus requisitos, seu comportamento, sua estrutura lógica e etc, sendo isso referente ao sistema que deverá ser implantado. Eles ajudam a entender como o sistema funciona e como seus componentes se relacionam entre si.
	Serão utilizados alguns desses diagramas para facilitar o entendimento do projeto, são eles:
Diagrama de Caso e Uso;
Diagrama de Classe;
Diagrama de Sequência.

5.1	Diagrama de Caso de Uso

A Figura 1 apresenta o diagrama de caso de uso geral do projeto, representando as principais funcionalidades e os atores presentes que interagem com o aplicativo.

Figura 14 - Visão Global Casos de uso

Fonte: O autor (2023)

Relação de Atores

Gestor
Cliente

Relação de Casos de Uso

Buscar Eventos
Autenticar
Gerenciar Perfil
Gerenciar Eventos
Visualizar Dashboard

Especificação dos Atores

Gestor

O gestor é a pessoa que gerencia eventos, ou seja, ele cria, edita, visualiza e deleta eventos. É o único que tem acesso às informações referentes aos eventos criados por ele e relatórios de acompanhamento.

Cliente

O cliente é o usuário que está em busca de entretenimento e utiliza das funcionalidades do sistema para consumir informações sobre eventos criados pelo gestor.

Caso de uso: 1. Buscar Eventos

Figura 15 - Diagrama de caso e uso - Buscar eventos

Fonte: O autor (2023)

Descrição resumida: Este caso de uso é responsável pela busca dos eventos..

Ator principal: Cliente.

Pré-condição: Estar autenticado.

Fluxo principal:

O cliente acessa a tela de busca;
O cliente seleciona o tipo de busca (formas de busca);
O cliente seleciona o evento desejado.

Fluxo Alternativo:

FA2-1: Busca de eventos não filtrados

O sistema retorna a lista eventos sem filtro;
O sistema retorna ao fluxo principal.

FA2-2: Filtrar eventos

O cliente filtra eventos;
O sistema retorna a lista eventos filtrados;
O sistema retorna ao fluxo principal.

	FA3: Favoritar eventos

O sistema retorna a lista de eventos;
O cliente favorita eventos.

	FA4: Recomendar eventos

O sistema retorna a lista de eventos recomendados;

	FA5: Confirmar presença

O cliente filtra ou não eventos;
O sistema retorna a lista de eventos;
O cliente seleciona evento;
O sistema retorna as informações do evento;
O cliente confirma presença.

Fluxo de Exceção:

	E1: Confirmar evento cancelado ou eventos finalizados.

Caso de uso: 2. Autenticar

Figura 16 - Diagrama de caso e uso - Autenticar

Fonte: O autor (2023)

Descrição resumida: Este caso de uso é responsável autenticar o usuário aplicativo.

Ator principal: Usuário (Cliente/Gestor).

Pré-condição: Nenhuma.

Fluxo principal:
	
FA2: Autenticar Login Social
O usuário acessa a tela de login;
O usuário clica em “Entrar com Google”;
O usuário preenche as informações requerentes do provedor (Google)
O sistema valida as informações;
O sistema redireciona o usuário para a tela inicial do aplicativo.

Fluxo Alternativo:

	FA2-1: Cadastrar

Se este é o primeiro acesso do usuário na plataforma o sistema irá reconhecer;
O sistema redireciona o usuário para tela de onboarding;
O usuário preenche informações de perfil;
O sistema apresenta tags relacionadas a eventos para reconhecer em primeiro momento um pouco mais sobre o usuário.
O usuário seleciona os tipos de eventos que tem a ver com o perfil dele;
Clica no botão de continuar;
O sistema redireciona o usuário para a tela principal.

FA2-2: Recuperar Senha

O nosso sistema utiliza somente login social para realizar a autenticação;
Se o usuário não consegue logar com o google, deverá recuperar a senha através do próprio provedor;
Após isso o usuário deverá acessar o nosso sistema novamente e realizar o fluxo de login;

	FA2-3: Autenticar pelo Google

O sistema abre o aplicativo do google/browser;
O usuário confirma a autenticidade em nosso aplicativo através do google;
O sistema valida as informações e redireciona o usuário para completar informações pessoais.

Fluxo de Exceção:

	E1: Autenticar sem estar cadastrado.

Caso de uso: 3. Gerenciar Perfil

Figura 17 - Diagrama de caso e uso - Gerenciar Perfil

Fonte: Autor

Descrição resumida: Este caso de uso é responsável pela busca dos eventos, obtendo a busca por meio de filtros ou buscando todos os eventos cadastrados.

Ator principal: Cliente e Gestor.

Pré-condição: Estar autenticado e ter autorização.

Fluxo principal:

O usuário acessa a tela de configurações da conta;
O usuário seleciona o tipo de ação (Deletar conta, editar perfil, sair da conta, gerenciar eventos).

Fluxo Alternativo

FA3-1: Deletar Conta

O usuário seleciona a opção de deletar conta;
O sistema abre uma modal de confirmação;
O usuário responde se deseja continuar ou não com a ação de deletar;
O sistema, de acordo com a resposta do usuário, deleta ou não a conta;
O sistema redireciona o usuário para a tela de login.

FA3-2: Editar Perfil

O usuário seleciona a opção editar informações de perfil;
O usuário escolhe a opção que deseja editar (nome social, gênero, e data de nascimento).
O usuário salva as alterações feitas;
O sistema retorna para a tela de configurações iniciais.

	FA3-3: Sair da Conta

O usuário seleciona a opção sair da conta;
O sistema retorna para a tela de login.

FA3-4: Gerenciar Eventos

O usuário clica em “gerenciar eventos” caso ele seja um gestor de eventos;
O sistema redireciona o usuário para a tela de dashboard dos eventos criados.

Fluxo de Exceção:

	E1: Deletar a conta e não ser redirecionado para login.
	E2: Editar perfil e não alterar as informações.
	E3: Ser redirecionado para a tela de dashboard sem ter se tornado um gerenciador de eventos antes.

Caso de uso: 4. Gerar Relatório Operacional de Eventos

Figura 18 - Diagrama de caso e uso - Relatórios Operacionais de Eventos

Fonte: Autor

Descrição resumida: Este caso de uso é responsável por gerar informações relevantes mediante aos eventos criados pelo gestor.

Ator principal: Gestor

Pré-condição: Ter cadastrado pelo menos um evento;

Fluxo principal:
	
FA4: Visualizar informações
O usuário acessa a página de detalhe do evento;
O usuário visualiza as informações geradas referente ao evento selecionado.

Fluxo Alternativo:

	FA4-1: Visualizar quantidade de pessoas confirmadas

O gestor acessa página de detalhe do evento criado;
O gestor visualiza a quantidade de pessoas confirmadas para o evento.

	FA4-2: Visualizar quantidade de acessos por evento

O gestor acessa página de detalhe do evento criado;
O gestor visualiza a quantidade de pessoas que acessaram a página do evento.

FA4-3: Visualizar pessoas que favoritaram o evento

O gestor acessa página de detalhe do evento criado;
O gestor visualiza a quantidade de pessoas que favoritaram o seu evento.

Fluxo de Exceção:

	E1: Não existe nenhum evento criado.

Caso de uso: 5. Gerar eventos

Figura 19 - Diagrama de caso e uso - Gerenciar Eventos

Fonte: O autor (2023)

Descrição resumida: O gestor consegue cadastrar, editar e deletar eventos.

Ator principal: Gestor.

Pré-condição: Ter um CNPJ ou CPF válido informado nas informações de perfil do usuário e ter feito o onboarding para se tornar gestor de eventos dentro do aplicativo.

Fluxo principal:
	
FA5: Listar eventos criados
O gestor lista eventos criados;
O gestor pode clicar nos botões de ações de cada evento para editar, deletar ou visualizar detalhes dos eventos;
O gestor pode cadastrar novos eventos.

Fluxo Alternativo:

	FA5-1: Cadastrar evento

O gestor clica no botão de adicionar evento;
O sistema redireciona o gestor para a tela de cadastrar evento;
O gestor preenche as informações;
O sistema valida as informações;
O sistema cadastra o evento e redireciona o usuário para a tela selecionar tags relacionadas ao evento.
O usuário seleciona tags que tenham haver com o evento.
O sistema salva e redireciona o usuário para a tela de listagem de eventos criados.

	FA5-2: Editar evento

O gestor seleciona evento que deseja editar;
O sistema redireciona o usuário para a tela de cadastrar evento com as informações do evento já preenchidas;
O gestor edita as informações desejadas;
O sistema valida e redireciona o usuário para a tela de listagem de eventos criados.

	FA5-2:3 Deletar evento

O gestor seleciona evento que deseja deletar;
O sistema mostra um modal com dois botões;
Confirmar: O gestor está ciente de que irá deletar o evento;
Cancelar: O gestor cancela a ação de deletar evento.
Após a ação escolhida pelo usuário referente ao modal, o sistema fecha o modal e atualiza a lista de eventos, retirando o evento deletado.

Fluxo de Exceção:
	E1:  Deletar ou Editar um evento deletado.

Caso de uso: 6. Visualizar Dashboard


Figura 20 - Diagrama de caso e uso - Visualizar Dashboard
Fonte: O autor (2023)


Descrição resumida: Este caso de uso é responsável apresentar gráficos na tela de Dashboard com o objetivo de gerar análises para o responsável pela criação de eventos.

Ator principal: Gestor

Pré-condição: Ter cadastrado pelo menos um evento;

Fluxo principal:
	
FA4: Visualizar gráficos
O usuário acessa a página de dashboard;
O usuário visualiza gráficos referentes aos eventos criados.

Fluxo Alternativo:

	FA4-1: Visualizar quantidade de pessoas confirmadas

O gestor acessa a tela de dashboard;
O gestor visualiza a quantidade de pessoas que já confirmaram presença nos eventos criados.

FA4-2: Visualizar quantidade de pessoas confirmadas por evento

O gestor acessa a tela de detalhe do evento;
O gestor visualiza a quantidade de pessoas que já confirmaram presença no evento.

	FA4-3: Visualizar quantidade de acessos

O gestor acessa a tela de dashboard;
O gestor visualiza a quantidade de pessoas que já acessaram os eventos criados;

FA4-4: Visualizar quantidade de acessos por evento

O gestor acessa a tela de detalhe do evento;
O gestor visualiza a quantidade de pessoas que já acessaram o evento;

FA4-5: Visualizar quantidade de pessoas que favoritaram

O gestor acessa a tela de dashboard;
O gestor visualiza a quantidade de pessoas que já favoritaram os eventos criados;

Fluxo de Exceção:

	E1: Não existem usuários interagindo com os eventos criados.

5.2	Diagrama Entidade Relacionamento

Figura 21 - Diagrama Entidade Relacionamento

Fonte: O autor (2023)

5.3	Diagrama de Classe


Figura 22 - Diagrama de Classe


Fonte: O autor (2023)

   5.3.1	Dicionário de Dados

Serão detalhadas, no presente tópico, as estruturas de dados contidas no Diagrama de Classe, contendo o projeto dividido em tabelas, logo abaixo:

Nome da Tabela: User
Estrutura: 

IdUser - Identificador de usuário (Texto do tipo UUID - Identificador único universal);
IdGender - Identificador de gênero do usuário (Texto do tipo UUID - Identificador único universal);
Email - Email de cadastramento do usuário (Caractere - 255);
FullName - Nome completo do usuário (Caractere - 255);
Document - CPF caso seja pessoa física, CNPJ para pessoa jurídica (Carácter - Válido - 11 ou 14);
SocialName - Nome socialmente usado pelo usuário (Carácter - 100);
AvatarUrl - Url (Localizador Uniforme de Recursos) de foto do perfil do usuário (Caractere - 255)
BirthDate - Data de nascimento do usuário (Data);
OnboardingDone - Indicativo de cadastro iniciado pelo usuário (Booleano - True/False);
IsEventManager - Indicativo de cadastro com CNPJ, no fluxo de Gerente de eventos (Booleano - True/False);
CreatedAt - Data e horário de criação do cadastro de usuário (Data e Hora).

Nome da Tabela: Address
Estrutura:

IdAddress - Identificador de endereço (Texto do tipo UUID - Identificador único universal);
IdUser - Identificador de usuário (Texto do tipo UUID - Identificador único universal);
IsMain - Define qual é o endereço principal do usuário (Booleano - True/False);
Country - País do endereço (Caractere - 255);
State - Estado do endereço (Caractere - 255);
City - Cidade do endereço (Caractere - 255);
Street - Rua do endereço (Caractere - 255);
Neighborhood - Bairro do endereço (Caractere - 255);
Lat - Latitude do endereço (Número decimal);
Lng - Longitude do endereço (Número decimal);
PostalCode - CEP do endereço (Caractere - 255)
CreatedAt - Data e horário de criação do cadastro (Data e Hora).

	Nome da Tabela: Genre
Estrutura:

idGenre - Identificador de gênero (Texto do tipo UUID - Identificador único universal);
Name - Nome do gênero (Caractere - 255);
NormalizedName - Nome do gênero sem caracteres especiais e sem espaço em branco (Caractere - 255);
Active - Identifica se o gênero está ativo ou não (Booleano - True/False);
CreatedAt - Data e horário de criação do cadastro (Data e Hora).

	Nome da Tabela: LogEventUser
Estrutura:

IdLog- Identificador do log (Texto do tipo UUID - Identificador único universal);
IdUser - Identificador do usuário responsável pela ação (Texto do tipo UUID - Identificador único universal);
IdEvent - Identificador do evento que sofreu interação do usuário (Texto do tipo UUID - Identificador único universal);
ActionName - Nome sem caracteres especiais e sem espaço que definem a ação executada pelo usuário para o evento (Caractere - 255);
CreatedAt - Data e horário de criação do cadastro (Data e Hora). 

	Nome da Tabela: Tag
Estrutura:

 
Name - Nome da tag (Caractere - 255);
NormalizedName - Nome do gênero sem caracteres especiais e sem espaço em branco (Caractere - 255); 
CreatedAt - Data e horário de criação do cadastro (Data e Hora).

	Nome da Tabela: Event
Estrutura:
 
IdEvent - Nome da tag (Caractere - 255);
IdUser - Identificador do usuário responsável pela criação do evento (Texto do tipo UUID - Identificador único universal);
Title - Título do evento (Caractere - 255); 
Description - Descrição do Evento (Caractere - 255); 
ShortDescription - Uma pequena descrição sobre o evento (Caractere - 255); 
IsPublished - Identifica se o evento está público ou não, caso esteja público todos os usuários poderão ver, se não estiver público, somente o usuário que criou o evento poderá vê-lo (Booleano - True/False);
StartHour - Hora inicial do evento (Hora); 
EndHour - Hora final do evento (Hora); 
StartDate - Data inicial do evento (Data); 
EndDate - Data final do evento (Data); 
ExternalUrl - Url (Localizador Uniforme de Recursos) será utilizado para redirecionar o usuário para uma página web externa (Caractere - 255);
ImageUrl - Url (Localizador Uniforme de Recursos) de foto do evento
 (Caractere - 255); 
CreatedAt - Data e horário de criação do cadastro (Data e Hora).

5.4	Diagrama de Sequência


Figura 23 - Diagrama de Sequência - Fluxo de Autenticação

Fonte: O autor (2023)
Figura 24 - Diagrama de Sequência - Fluxo de Buscar Eventos
Fonte: O autor (2023)





Figura 25 - Diagrama de Sequência - Fluxo de Gerenciar Perfil
Fonte: O autor (2023)



Figura 26 - Diagrama de Sequência - Fluxo de Gerenciar Eventos

Fonte: O autor (2023)


Figura 27 - Diagrama de Sequência - Fluxo de Relatórios Gerenciais

Fonte: O autor (2023)

CAPÍTULO 6. CONCLUSÃO

À medida que a sociedade avança em direção a uma era cada vez mais digital e conectada, a demanda por soluções inovadoras que atendam às necessidades específicas dos usuários cresce exponencialmente. O aplicativo desenvolvido neste trabalho de conclusão de curso surge como uma resposta a essa demanda, buscando proporcionar uma experiência personalizada e dinâmica na busca e participação em eventos locais.
A iniciativa parte da percepção de que a complexidade e diversidade das opções de eventos muitas vezes deixam os usuários perdidos em um mar de informações dispersas. A proposta central do aplicativo é conectar os usuários a eventos próximos que estejam alinhados com seus interesses pessoais, promovendo uma experiência rica e adaptada.
A arquitetura sólida do projeto, fundamentada no backend como serviço Supabase e no frontend React Native, reflete o compromisso com a eficiência e escalabilidade. A integração de um banco de dados relacional PostgreSQL e o sistema em Python para consulta de dados evidencia a abordagem técnica cuidadosa na implementação da solução.
As funcionalidades atuais do aplicativo oferecem aos usuários uma gama diversificada de opções, desde a interação dinâmica com eventos até a capacidade de confirmar presença e favoritar suas atividades preferidas. A busca personalizada, eliminando barreiras geográficas, e a validação de Gerentes de Eventos garantem uma experiência confiável e inclusiva.
A utilização de dados gerados pelos próprios usuários alimenta um Sistema de Recomendação inovador, fundamentado em algoritmos de análise de dados. A referência à OpenAI destaca a busca contínua por inovações e avanços tecnológicos que enriqueçam a experiência do usuário.
A diversidade de usuários atendidos pelo aplicativo, aliada à inclusão de Gerentes de Eventos, contribui para a criação de uma plataforma que reflete a riqueza da vida cultural em diferentes localidades.
Entretanto, reconhecemos que desafios persistem, especialmente no que diz respeito à limitação dos eventos cadastrados devido à falta de integração com outras APIs. Futuras integrações são identificadas como um caminho para expandir a variedade de eventos e aprimorar a experiência dos usuários.
Este trabalho não apenas apresentou o desenvolvimento técnico do aplicativo, mas também destacou a importância de adaptar-se às mudanças tecnológicas e atender às crescentes expectativas dos consumidores móveis. A análise detalhada do processo, os resultados obtidos, a pesquisa de relevância e as lições aprendidas contribuem para um entendimento abrangente do desenvolvimento e implementação de soluções tecnológicas inovadoras.
A busca pela excelência na personalização de serviços e eliminação de barreiras tecnológicas é fundamental para acompanhar as transformações rápidas da sociedade digital. Este aplicativo, portanto, é uma resposta adaptável e centrada no usuário para a complexidade dos padrões de consumo modernos.

REFERÊNCIAS

ABES, Associação Brasileira das Empresas de Software. Mercado Brasileiro de Software - Panorama e Tendências, 2023. Disponível em: <https://abes.com.br/dados-do-setor/>. Acesso em: 03 de Dezembro de 2023.

ABREU, Leandro - Personalização de conteúdo: o que é, vantagens e como fazer?, 2020. Rock Content. Disponível em: <https://rockcontent.com/br/blog/personalizacao-de-conteudo/>. Acesso em: 3 Dezembro 2023.

ALMEIDA, Felipe; XEXÉO, Geraldo. Word embeddings: A survey, 2019. arXiv preprint arXiv:1901.09069.

COELHO, Filipe Ferreira. Machine learning e análise técnica como ferramentas para construção de portfólios de renda variável no mercado brasileiro, 2020. Tese de Doutorado.

CUNHA, André - O que é React Native? - Vantagens e Guia do Framework, 20 de Outubro de 2022. Alura. Disponível em: <https://www.alura.com.br/artigos/react-native>. Acesso em: 4 de Junho de 2023. 

DELGADO, Cecília - Mais de 90% do tempo no celular é gasto em apps, Outubro de 2022. Consumidor Moderno. Disponível em: <https://consumidormoderno.com.br/2022/10/13/apps-melhores-aplicativos/>. Acesso em: 04 de Junho de 2023.

Editorial Aela. A Importância Da Usabilidade Em Projetos De UX Design. Aela School, Editorial Aela, 13 Fevereiro 2020, <https://aelaschool.com/experienciadousuario/a-importancia-da-usabilidade-em-projetos-de-ux-design/>. Acesso em: 02 de Julho de 2023.

ELGAZZAR, Khalid; MARTIN, Patrick; & HASSANEIN, Hossam - Mobile Web Services: State of the Art and Challenges, 2014. International Journal of Advanced Computer Science and Applications, Vol. 5, No. 3, pp. 173-188.

ELMASRI, R., Navathe, S. B.; Pinheiro, M. G. Sistemas de banco de dados, 2011. Editora Pearson Education do Brasil. 6ª Edição.

FERNANDES, Carlos. Porquê sua empresa precisa de um aplicativo móvel - Aplicativos como parte da Transformação Digital, 2020. Venturus. Disponível em: <https://www.venturus.org.br/porque-sua-empresa-precisa-de-um-aplicativo-movel/>. Acesso em: 04 de Junho de 2023.

GEOFUSION. Canais de distribuição: saiba quais são e as vantagens de cada uma, 2023. Disponível em: <https://geofusion.com.br/blog/tipos-de-distribuicao/>. Acesso em 03 de dezembro de 2023.

GOV.BR. Plano de Diretrizes para Conformidade à Lei Geral de Proteção de Dados Pessoais, 2022. Disponível em: <https://www.gov.br/economia/pt-br/acesso-a-informacao/acoes-e-programas/integra/governanca/comites-tematicos-de-apoio-a-governanca/comite-tematico-de-protecao-de-dados-pessoais-ceppdp/documentos-ceppdp/documentos-do-ceppdp/PlanoDiretrizesParaConformidadeALGPD.pdf/>. Acesso em 01 de dezembro de 2023.

GUEDES, Gilleanes TA. UML 2–Guia Prático, 2014. Novatec Editora. 2ª Edição. 
SHAHIR, Hamed Yaghoubi; DANESHPAJOUH, Shervin; RAMSIN, Raman. Improvement strategies for agile processes: a SWOT analysis approach, 2008. Sixth International Conference on Software Engineering Research, Management and Applications. IEEE, 2008. p. 221-228.

IBGE. Acesso à internet e posse de telefone móvel celular para uso pessoal, 2011. Disponível em: <https://encurtador.com.br/cCHV3 />. Acesso em 02 de julho de 2023.

KOTLER, Philip; ARMSTRONG, Gary. Principles of Marketing, 2005. Published by Pearson Education. (ISBN-13: 978-0-273-68456-5, ISBN-10: 0-273-68456-6)

LAMEGO, Leandro Magalhães - O USO DE ALGORITMOS DE RECOMENDAÇÃO NA SELEÇÃO DE DISCIPLINAS: UM ESTUDO DE CASO, 2011. p. 86. Disponível em: <https://bdm.unb.br/bitstream/10483/28669/1/2020_LeandroMagalhaesLamego_tcc.pdf>. Acesso em: 04 de Junho de 2023.

LAMFO, Laboratório de Aprendizado de Máquina em Finanças e Organizações. Sistemas de Recomendação usando Collaborative Filtering, 2018. Disponível em: <https://lamfo-unb.github.io/2018/09/29/Sistemas-de-Recomenda%C3%A7%C3%A3o-usando-Collaborative-Filtering/>. Acesso em: 04 de Dezembro de 2023.

LIMA, I.; Pinheiro, C. A. M.; & Santos, F. A. O. - Inteligência Artificial, 2014. p. 184 Elsevier Editora. (ISBN: 8535278087, 9788535278088)

LOBO, L. C. Inteligência artificial, o Futuro da Medicina e a Educação Médica, 2018. Revista Brasileira de Educação Médica, [S.L.], v. 42, n. 3, p. 3-8, Jul-Set. 2018. Disponível em: <https://doi.org/10.1590/1981-52712015v42n3RB20180115EDITORIAL1>.Acesso em: 07 de Julho de 2023.

LOCAWEB, Análise de concorrência: saiba qual a importância e como fazer, 2022. Locaweb. Disponível em: <https://www.locaweb.com.br/blog/temas/como-vender-mais/analise-de-concorrencia-saiba-qual-a-importancia-e-como-fazer/ >. Acesso em 3 de Dezembro de 2023.

MANA, Suja Cherukullapurath; SASIPRABA, T. A machine learning based implementation of product and service recommendation models, 2021. 7th International Conference on Electrical Energy Systems (ICEES). IEEE, 2021. p. 543-547.

MONARD, Maria Carolina & BARANAUSKAS, José Augusto. Conceitos sobre aprendizado de máquina. Sistemas inteligentes-Fundamentos e aplicações, v. 1, n. 1, p. 32, 2003.

Object Management Group - About the Unified Modeling Language Specification Version 2.4.1, Julho de 2011. Object Management Group. Disponível em <https://www.omg.org/spec/UML/2.4.1/About-UML/ >. Acesso em: 04 de Junho de 2023.

OLIVEIRA, Fabricio Albrecht; TORTATO, Ubiratã. Unificação dos canais de distribuição: O caso da empresa Alpha de desenvolvimento de software, 2008. Revista Pretexto.

OLIVEIRA, Ruy F. Inteligência artificial, 2018. Editora e Distribuidora Educacional S.A. p. 224. (ISBN: 978-85-522-1141-9)

OPENAI. Documentation - Embeddings, 2023. Disponível em: <https://platform.openai.com/docs/guides/embeddings/embeddings/>. Acesso em: 04 de Dezembro de 2023.

PARANÁ. Secretaria de Estado da Educação. Superintendência de Educação. Os Desafios da Escola Pública Paranaense na Perspectiva do Professor PDE: Produção Didático-pedagógica, 2014. Curitiba: SEED/PR., 2016. V.2. (Cadernos PDE). Disponível em: <http://www.diaadiaeducacao.pr.gov.br/portals/cadernospde/pdebusca/producoes_pde/2014/2014_unicentro_arte_pdp_angela_maria_pedro_de_oliveira_definski.pdf>. Acesso em: 12 de Outubro de 2023. (ISBN: 978-85-8015-079-7)

PATRIOTA, M. E. P. R. O impacto da tecnologia móvel no relacionamento interpessoal da Geração Z. Centro Universitário de Brasília, p.1-30, 2015. Disponível em <https://goo.gl/YHQfxb />. Acesso em: 02 de julho de 2023.

POOLE, D.; Mackworth, A. K.; & Goebel, R. Computational Intelligence: A Logical Approach, Jan. 1998.  Oxford University Press, pág. 558. (ISBN: 978-0-19-510270-3).

RECEITAWS. ReceitaWS API, 2023. Disponível em: <https://www.receitaws.com.br/>. Acesso em: 04 de Dezembro de 2023.

RICCI, F., ROKACH, L., & SHAPIRA, B. - Introduction to recommender systems handbook, 2011. In F. Ricci, L. Rokach, B. Shapira, P. B. Kantor, F. Ricci, L. Rokach, B. Shapira, & P. B. Kantor (Eds.). Boston, MA: Springer.

ROUSE, Margaret - What is a Mobile Application?, 2020. Techopedia. Disponível em: <https://www.techopedia.com/definition/2953/mobile-application-mobile-app/>. Acesso em: 4 de junho de 2023.

RUSSELL, S.; & NORVING, P. Artificial Intelligence: A Modern Approach (4th ed.), 2020. Editora Pearson, pág. 1136.

SELLTIZ, et. al. - Métodos de Pesquisa nas Relações Sociais, 1965. Holt, Rinehart and Winston. Acesso em: 04 de Junho de 2023.

SOMMERVILLE, Ian - Engenharia de software/lan Sommerville, 2018. Tradução Luiz Claudio Queiroz; revisão técnica Fábio Levy Siqueira.

SYDLE. Desenvolvimento de software: quais são as 9 principais tendências?, 2022. Sydle. Disponível em: <https://www.sydle.com/br/blog/desenvolvimento-de-software-628e84b5ab646f1d5f3bbc3e/>. Acesso em: 3 de Dezembro de 2023.

TURKLE, Sherry. Alone Together: Why We Expect More from Technology and Less from Each Other, 2012. Editora Basic Books (AZ). (ISBN 978-0465031467)

UKPABI, D.; & KARJALUOTO, H. Consumers’ acceptance of information and communications technology in tourism, 2022. Telematics and Informatics, 2017. Disponível em: <https://scholar.google.com/citations?view_op=view_citation&hl=th&user=srI6bT8AAAAJ&citation_for_view=srI6bT8AAAAJ:zYLM7Y9cAGgC/>. Acesso em: 04 de Junho de 2023.

VIVO - Conheça os tipos de sistemas operacionais existentes, 3 de Setembro de 2021. Vivo. Disponível em: <https://www.vivo.com.br/para-voce/por-que-vivo/vivo-explica/para-descomplicar/tipos-de-sistemas-operacionais>. Acesso em: 4 de Junho de 2023.

WILKIE, William L. Consumer behavior, 1994. Editora John Wiley & Sons. (ISBN-10:‎ 0471545171, ISBN-13:‎ 978-0471545170)

WIRTH, Niklaus - Programação Orientada a Objetos, 1995.


ANEXOS A - QUESTIONÁRIO UTILIZADO NA PESQUISA

Qual tipo de evento você costuma curtir? 
Shows;
Eventos Esportivos;
Atividades Culturais (teatro, exposições, etc.);
Workshops e Palestras;
Gastronômicos;
Ciência e Tecnologia;
Religiosos;
Saúde e Bem-Estar;
Outro.

Com que frequência você vai a eventos?
Entre 3 a 5 vezes por semana;
Entre 1 a 3 vezes por semana;
Pelo menos 1 vez por semana;
Menos de 1 vez por semana.

Você possui dificuldade em encontrar eventos relevantes (do seu interesse)?
Sim;
Quase sempre;
Nem sempre;
Não.

Como você costuma descobrir novos eventos?  (Marque todas as opções que se aplicam)
Redes Sociais;
Aplicativos de Eventos;
Sites de Eventos;
Recomendações de Amigos;
Cartazes ou Anúncios Locais;
Recomendação de Influenciadores;
Anúncios em Rádios ou TV.

Quais são os maiores obstáculos que você enfrenta ao procurar eventos para participar?  (Marque todas as opções que se aplicam)
Dificuldade em Encontrar Eventos Relevantes (do meu gosto);
Falta de Informações detalhadas sobre os Eventos;
Eventos com Preços Inacessíveis;
Desorganização na Divulgação de Eventos;
Dificuldade em Confirmar a Credibilidade dos Eventos;
Localização dos eventos distantes;
Falta de acessibilidade para Pessoas com Deficiência;
Não possuo obstáculos ao procurar eventos.

Você gostaria de um aplicativo que ajudasse a encontrar eventos com maior facilidade, entendendo o seu perfil e te recomendando eventos que sejam ideais para você?
Sim.
Não.

Você gostaria de criar seus próprios eventos para divulgar através de um aplicativo?
Sim.
Talvez.
Não.

Gênero
Masculino.
Feminino.
Outro.

Idade
Menos de 16 anos;
Entre 17 e 25 anos;
Entre 26 e 35 anos;
Entre 36 e 45 anos;
Entre 46 e 55 anos;
Mais de 56 anos.

ANEXO B - RESPOSTAS DA PESQUISA

Tabela 1 - Tipos de Eventos Preferidos

Tipo de Evento
Número de Respostas
Shows
101
Eventos Esportivos
72
Atividades Culturais
100
Workshops e Palestras
53
Gastronômicos
71
Ciência e Tecnologia
53
Religiosos
41
Saúde e Bem-Estar
47
Atividade ao Ar Livre
17
NDA
4
Eventos de Jogos
1
Boates/Bares
1
Feiras de Artesanato/Feirinha
1

Fonte: O autor (2023)



Tabela 2 - Frequência de Participação em Eventos

Frequência
Número de Respostas
Entre 3 a 5 vezes por semana
3
Entre 1 a 3 vezes por semana
8
Pelo menos 1 vez por semana
50
Menos de 1 vez por semana
81

Fonte: O autor (2023)

Tabela 3 - Atitude em Relação aos Eventos

Atitude
Número de Respostas
Sim
43
Quase sempre
43
Nem sempre
45
Não
32

Fonte: O autor (2023)

Tabela 4 - Meios de Descobrir Eventos

Meios de Descoberta
Número de Respostas
Redes Sociais
156
Aplicativos de Eventos
18
Sites de Eventos
35
Recomendações de Amigos
124
Cartazes ou Anúncios Locais
45
Recomendação de Influenciadores
41
Anúncios em Rádios ou TV
23

Fonte: O autor (2023)

Tabela 5 - Obstáculos na Participação em Eventos

Obstáculos
Número de Respostas
Dificuldade em Encontrar Eventos Relevantes
90
Falta de Informações Detalhadas sobre os Eventos
65
Eventos com Preços Inacessíveis
93
Desorganização na Divulgação de Eventos
44
Dificuldade em Confirmar a Credibilidade dos Eventos
21
Localização dos Eventos Distantes
70
Falta de Acessibilidade para Pessoas com Deficiência
1
Não possuo obstáculos ao procurar eventos
8

Fonte: O autor (2023)

Tabela 6 - Participação em Eventos Online

Participação em Eventos Online
Número de Respostas
Sim
159
Não
4

Fonte: O autor (2023)

Tabela 7 - Disposição para Pagar por Eventos

Disposição para Pagar
Número de Respostas
Sim
49
Talvez
79
Não
35

Fonte: O autor (2023)

Tabela 8 - Gênero

Gênero
Número de Respostas
Masculino
47
Feminino
92
Não Binário
1

Fonte: O autor (2023)


Tabela 9 - Faixa Etária

Faixa Etária
Número de Respostas
Menos de 16 anos
1
Entre 17 e 25 anos
90
Entre 26 e 35 anos
36
Entre 36 e 45 anos
10
Entre 46 e 55 anos
5
Mais de 56 anos
0

Fonte: O autor (2023)
