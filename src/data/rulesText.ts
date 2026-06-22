import type { Lang } from '../types';

export interface RulesSection {
  heading: string;
  paragraphs: string[];
}

export type RulesContent = RulesSection[];

// Full rules text. English plus the eight translator languages.
// Headings are translated; paragraph structure is preserved across all languages.
export const RULES_TEXT: Record<'en' | Lang, RulesContent> = {
  en: [
    {
      heading: 'How to Play',
      paragraphs: [
        `This is a social game that involves asking other players questions in order to find the spy. One (or more) player will be the spy, and will not know the location that is shown to all the other players. The spy's goal is to learn what the location is, and to keep their identity secret. The other players' goal is to figure out who the spy is.`,
        `Only one person needs to have the app on their phone. Choose the total number of people who are playing, and press Start. Each player should press the card to have it turn around and reveal one of two things: a location, or the word "Spy". In each round, all players who are not the spy will be told the same location. It's important that no one else can see the screen when the card is flipped, and also important that players press the screen again to turn the card back to its original state before they pass the phone to the next player.`,
        `Once all players have flipped the card and seen either the location or "Spy", the round begins. Any player can ask any other player a question about the location. That player has to answer the question in a way that gives enough information to the group to show that they are not the spy and know what the location is. However, they need to be careful not to answer in a way that reveals too much about the location, which will help the spy to figure out what it is.`,
        `There is no limit on how long a round lasts or how many questions are asked. The round continues until players think they know who the spy is and they are ready to accuse someone. Generally, it's a good idea to come up with at least two candidates, maybe more, and have everyone vote on who they think the spy is.`,
        `Once one player has been chosen as the spy, they do not immediately reveal their identity: instead, they state what the location is. If they are not the spy, they will know the answer. If they are the spy, and they get the location correct, it means they figured out the location from listening to other players' questions and answers.`,
        `The spy wins if the players select another player as the spy, or if they are selected but are able to correctly state the location.`,
        `Everyone else wins if the spy is successfully found and cannot guess the location.`,
      ],
    },
    {
      heading: 'A few pieces of advice',
      paragraphs: [
        `It's important not to be too specific when asking and when answering questions. For example, if the location is a beach, then asking: "Would you wear a bikini to this place?" or "Is there a lot of water here?" will give the spy too much information. Similarly, if someone asks if it is a fun place, saying: "Yes, if it's warm enough to swim" or "It is if you like sand" would be bad answers.`,
        `All conversations should be public, so everyone can hear. Remember, if you have a quiet chat to your friend next to you to share your thoughts with them, they might be the spy.`,
        `At the start of a round, it's a good idea not to ask one person lots of questions at once, but rather to try to have everyone give at least a little bit of information, before you decide who you think is suspicious.`,
        `If you are the spy, try to be vague in your answers, but also confident. You can talk your way out of most situations if you act as if you know what you're doing.`,
        `Pay attention to who is being quiet. Spies will often say as little as possible, while they gather information from everyone else.`,
        `It's tempting to keep asking questions until you are highly confident you know who the spy is, but the more you talk, the more information you are giving them. If the round goes on for a very long time, the spy will probably figure out the location.`,
      ],
    },
    {
      heading: 'ESL Mode and Translation',
      paragraphs: [
        `To make the game more accessible to people who don't speak English as a first language, we have included the option of limiting the list of possible locations to sets using simpler, more common words. The options are roughly based on Common European Framework of Reference (CEFR) levels, from A1 (beginner/elementary) to C1 (advanced). Each level adds more words to the list, so A2 will include all A1 locations, and B1 will include all A1 and A2 locations, etc.`,
        `Having any ESL level selected (that is, any value except "No") will also activate the translation option. With the translator active, once you flip the card and see the location, there will be an image of a magnifying glass and the word Translate beneath it. Click Translate to select a language, then move the magnifying glass over the location.`,
      ],
    },
    {
      heading: 'Game in progress buttons and sound',
      paragraphs: [
        `Once the round starts, music will play. This can be turned off by reducing the volume to zero. There are also two buttons to control the track. The first button, on the left, will skip to the next track. The button on the right will loop the current track, repeating it once it finishes.`,
        `Pressing the End Game button will give the option to start a new round with the same settings, by pressing Next Round. Menu will take you back to the title screen.`,
      ],
    },
  ],

  fr: [
    {
      heading: 'Comment jouer',
      paragraphs: [
        `Il s'agit d'un jeu de société dans lequel les joueurs se posent des questions afin de démasquer l'espion. Un joueur (ou plusieurs) sera l'espion et ne connaîtra pas le lieu montré à tous les autres joueurs. Le but de l'espion est de découvrir quel est ce lieu, tout en gardant son identité secrète. Le but des autres joueurs est de deviner qui est l'espion.`,
        `Une seule personne a besoin d'avoir l'application sur son téléphone. Choisissez le nombre total de personnes qui jouent, puis appuyez sur Démarrer. Chaque joueur doit appuyer sur la carte pour la retourner et révéler l'une de deux choses : un lieu, ou le mot « Espion ». À chaque manche, tous les joueurs qui ne sont pas l'espion verront le même lieu. Il est important que personne d'autre ne puisse voir l'écran lorsque la carte est retournée, et il est également important que chaque joueur appuie de nouveau sur l'écran pour remettre la carte dans son état initial avant de passer le téléphone au joueur suivant.`,
        `Une fois que tous les joueurs ont retourné la carte et vu soit le lieu, soit « Espion », la manche commence. N'importe quel joueur peut poser une question sur le lieu à n'importe quel autre joueur. Ce joueur doit répondre de manière à donner au groupe suffisamment d'informations pour montrer qu'il n'est pas l'espion et qu'il connaît le lieu. Cependant, il doit faire attention à ne pas répondre d'une façon qui en révèle trop sur le lieu, ce qui aiderait l'espion à le deviner.`,
        `Il n'y a aucune limite à la durée d'une manche ni au nombre de questions posées. La manche continue jusqu'à ce que les joueurs pensent savoir qui est l'espion et soient prêts à accuser quelqu'un. En général, il est conseillé de proposer au moins deux suspects, voire plus, et de faire voter tout le monde sur la personne qu'ils soupçonnent d'être l'espion.`,
        `Une fois qu'un joueur a été désigné comme l'espion, il ne révèle pas immédiatement son identité : il annonce plutôt quel est le lieu. S'il n'est pas l'espion, il connaîtra la réponse. S'il est l'espion et qu'il donne le bon lieu, cela signifie qu'il a deviné le lieu en écoutant les questions et les réponses des autres joueurs.`,
        `L'espion gagne si les joueurs désignent un autre joueur comme étant l'espion, ou s'il est désigné mais parvient à annoncer correctement le lieu.`,
        `Tous les autres gagnent si l'espion est démasqué et qu'il est incapable de deviner le lieu.`,
      ],
    },
    {
      heading: 'Quelques conseils',
      paragraphs: [
        `Il est important de ne pas être trop précis, aussi bien en posant qu'en répondant aux questions. Par exemple, si le lieu est une plage, demander : « Porterais-tu un bikini dans cet endroit ? » ou « Y a-t-il beaucoup d'eau ici ? » donnera trop d'informations à l'espion. De même, si quelqu'un demande si c'est un endroit amusant, répondre : « Oui, s'il fait assez chaud pour se baigner » ou « Ça l'est si tu aimes le sable » serait une mauvaise réponse.`,
        `Toutes les conversations doivent être publiques, afin que tout le monde puisse entendre. Rappelez-vous : si vous discutez discrètement avec votre voisin pour lui faire part de vos idées, c'est peut-être lui l'espion.`,
        `Au début d'une manche, il vaut mieux éviter de poser beaucoup de questions à une seule personne d'un coup ; essayez plutôt de faire en sorte que chacun donne au moins un peu d'informations avant de décider qui vous paraît suspect.`,
        `Si vous êtes l'espion, essayez de rester vague dans vos réponses, mais aussi sûr de vous. On peut se sortir de presque toutes les situations en agissant comme si l'on savait ce que l'on faisait.`,
        `Faites attention à ceux qui restent silencieux. Les espions en disent souvent le moins possible, pendant qu'ils recueillent des informations auprès de tous les autres.`,
        `Il est tentant de continuer à poser des questions jusqu'à être tout à fait certain de l'identité de l'espion, mais plus vous parlez, plus vous lui donnez d'informations. Si la manche dure très longtemps, l'espion finira probablement par deviner le lieu.`,
      ],
    },
    {
      heading: 'Mode ESL et traduction',
      paragraphs: [
        `Pour rendre le jeu plus accessible aux personnes dont l'anglais n'est pas la langue maternelle, nous avons inclus la possibilité de limiter la liste des lieux possibles à des ensembles utilisant des mots plus simples et plus courants. Les options sont approximativement basées sur les niveaux du Cadre européen commun de référence pour les langues (CECR), du niveau A1 (débutant/élémentaire) au niveau C1 (avancé). Chaque niveau ajoute davantage de mots à la liste : ainsi, A2 inclut tous les lieux de A1, B1 inclut tous les lieux de A1 et A2, et ainsi de suite.`,
        `Le fait de sélectionner un niveau ESL quelconque (c'est-à-dire toute valeur autre que « Non ») activera aussi l'option de traduction. Lorsque le traducteur est actif, une fois que vous retournez la carte et voyez le lieu, une image de loupe apparaîtra avec le mot Traduire en dessous. Appuyez sur Traduire pour choisir une langue, puis déplacez la loupe sur le lieu.`,
      ],
    },
    {
      heading: 'Boutons et son pendant la partie',
      paragraphs: [
        `Une fois la manche commencée, de la musique se met à jouer. On peut la couper en réduisant le volume à zéro. Il y a également deux boutons pour contrôler le morceau. Le premier bouton, à gauche, passe au morceau suivant. Le bouton de droite met le morceau actuel en boucle, le répétant une fois terminé.`,
        `Appuyer sur le bouton Terminer la partie donnera la possibilité de commencer une nouvelle manche avec les mêmes réglages, en appuyant sur Manche suivante. Menu vous ramènera à l'écran d'accueil.`,
      ],
    },
  ],

  es: [
    {
      heading: 'Cómo jugar',
      paragraphs: [
        `Este es un juego social que consiste en hacer preguntas a los demás jugadores para descubrir al espía. Uno (o más) de los jugadores será el espía y no sabrá cuál es el lugar que se muestra a todos los demás. El objetivo del espía es averiguar cuál es el lugar y mantener su identidad en secreto. El objetivo de los demás jugadores es descubrir quién es el espía.`,
        `Solo una persona necesita tener la aplicación en su teléfono. Elige el número total de personas que juegan y pulsa Empezar. Cada jugador debe pulsar la tarjeta para darle la vuelta y revelar una de dos cosas: un lugar, o la palabra «Espía». En cada ronda, todos los jugadores que no sean el espía verán el mismo lugar. Es importante que nadie más pueda ver la pantalla cuando se da la vuelta a la tarjeta, y también es importante que los jugadores pulsen de nuevo la pantalla para devolver la tarjeta a su estado original antes de pasar el teléfono al siguiente jugador.`,
        `Una vez que todos los jugadores han dado la vuelta a la tarjeta y han visto el lugar o la palabra «Espía», comienza la ronda. Cualquier jugador puede hacerle a cualquier otro una pregunta sobre el lugar. Ese jugador debe responder de manera que dé al grupo suficiente información para demostrar que no es el espía y que sabe cuál es el lugar. Sin embargo, debe tener cuidado de no responder de una forma que revele demasiado sobre el lugar, lo que ayudaría al espía a adivinarlo.`,
        `No hay límite de tiempo para una ronda ni de cuántas preguntas se hacen. La ronda continúa hasta que los jugadores creen saber quién es el espía y están listos para acusar a alguien. Por lo general, conviene proponer al menos dos sospechosos, o quizá más, y que todos voten por quién creen que es el espía.`,
        `Una vez que un jugador ha sido señalado como el espía, no revela de inmediato su identidad: en su lugar, dice cuál es el lugar. Si no es el espía, sabrá la respuesta. Si es el espía y acierta el lugar, significa que lo dedujo escuchando las preguntas y respuestas de los demás jugadores.`,
        `El espía gana si los jugadores señalan a otro jugador como el espía, o si lo señalan a él pero consigue decir correctamente cuál es el lugar.`,
        `Todos los demás ganan si se descubre al espía y este no logra adivinar el lugar.`,
      ],
    },
    {
      heading: 'Algunos consejos',
      paragraphs: [
        `Es importante no ser demasiado específico, tanto al hacer como al responder preguntas. Por ejemplo, si el lugar es una playa, preguntar: «¿Llevarías un bikini a este sitio?» o «¿Hay mucha agua aquí?» le dará demasiada información al espía. Del mismo modo, si alguien pregunta si es un lugar divertido, responder: «Sí, si hace suficiente calor para nadar» o «Lo es si te gusta la arena» serían malas respuestas.`,
        `Todas las conversaciones deben ser públicas, para que todos puedan oír. Recuerda: si hablas en voz baja con el amigo que tienes al lado para compartir tus ideas, podría ser el espía.`,
        `Al principio de una ronda, conviene no hacerle muchas preguntas a una sola persona de golpe, sino tratar de que todos aporten al menos un poco de información antes de decidir quién te parece sospechoso.`,
        `Si eres el espía, intenta ser vago en tus respuestas, pero también seguro de ti mismo. Puedes salir de casi cualquier situación si actúas como si supieras lo que haces.`,
        `Presta atención a quién se queda callado. Los espías suelen decir lo menos posible mientras recopilan información de todos los demás.`,
        `Es tentador seguir haciendo preguntas hasta estar muy seguro de quién es el espía, pero cuanto más hablas, más información le das. Si la ronda se alarga mucho, lo más probable es que el espía acabe adivinando el lugar.`,
      ],
    },
    {
      heading: 'Modo ESL y traducción',
      paragraphs: [
        `Para que el juego sea más accesible a las personas que no tienen el inglés como lengua materna, hemos incluido la opción de limitar la lista de lugares posibles a conjuntos que usan palabras más sencillas y comunes. Las opciones se basan aproximadamente en los niveles del Marco Común Europeo de Referencia para las Lenguas (MCER), desde A1 (principiante/elemental) hasta C1 (avanzado). Cada nivel añade más palabras a la lista, de modo que A2 incluye todos los lugares de A1, B1 incluye todos los de A1 y A2, y así sucesivamente.`,
        `Tener seleccionado cualquier nivel ESL (es decir, cualquier valor distinto de «No») también activará la opción de traducción. Con el traductor activo, una vez que des la vuelta a la tarjeta y veas el lugar, aparecerá la imagen de una lupa con la palabra Traducir debajo. Pulsa Traducir para elegir un idioma y luego mueve la lupa sobre el lugar.`,
      ],
    },
    {
      heading: 'Botones y sonido durante la partida',
      paragraphs: [
        `Una vez que comienza la ronda, sonará música. Se puede silenciar bajando el volumen a cero. También hay dos botones para controlar la pista. El primer botón, a la izquierda, pasa a la siguiente pista. El botón de la derecha repite en bucle la pista actual, volviéndola a poner cuando termina.`,
        `Al pulsar el botón Terminar partida se ofrecerá la opción de empezar una nueva ronda con los mismos ajustes, pulsando Siguiente ronda. Menú te llevará de vuelta a la pantalla de inicio.`,
      ],
    },
  ],

  pt: [
    {
      heading: 'Como jogar',
      paragraphs: [
        `Este é um jogo social que consiste em fazer perguntas aos outros jogadores para descobrir o espião. Um (ou mais) jogador será o espião e não saberá qual é o lugar mostrado a todos os outros jogadores. O objetivo do espião é descobrir qual é o lugar e manter a sua identidade em segredo. O objetivo dos outros jogadores é descobrir quem é o espião.`,
        `Apenas uma pessoa precisa ter o aplicativo no celular. Escolha o número total de pessoas que estão jogando e aperte Começar. Cada jogador deve apertar a carta para virá-la e revelar uma de duas coisas: um lugar, ou a palavra "Espião". Em cada rodada, todos os jogadores que não forem o espião verão o mesmo lugar. É importante que mais ninguém possa ver a tela quando a carta é virada, e também é importante que os jogadores apertem a tela novamente para voltar a carta ao seu estado original antes de passar o celular para o próximo jogador.`,
        `Assim que todos os jogadores tiverem virado a carta e visto o lugar ou a palavra "Espião", a rodada começa. Qualquer jogador pode fazer a qualquer outro uma pergunta sobre o lugar. Esse jogador precisa responder de modo a dar ao grupo informação suficiente para mostrar que não é o espião e que sabe qual é o lugar. No entanto, precisa ter cuidado para não responder de uma forma que revele demais sobre o lugar, o que ajudaria o espião a adivinhá-lo.`,
        `Não há limite para a duração de uma rodada nem para quantas perguntas são feitas. A rodada continua até os jogadores acharem que sabem quem é o espião e estarem prontos para acusar alguém. Em geral, é uma boa ideia apontar pelo menos dois suspeitos, talvez mais, e fazer todos votarem em quem acham que é o espião.`,
        `Assim que um jogador for escolhido como o espião, ele não revela imediatamente a sua identidade: em vez disso, diz qual é o lugar. Se não for o espião, saberá a resposta. Se for o espião e acertar o lugar, significa que descobriu o lugar ouvindo as perguntas e respostas dos outros jogadores.`,
        `O espião vence se os jogadores escolherem outro jogador como o espião, ou se ele for escolhido mas conseguir dizer corretamente qual é o lugar.`,
        `Todos os outros vencem se o espião for descoberto e não conseguir adivinhar o lugar.`,
      ],
    },
    {
      heading: 'Alguns conselhos',
      paragraphs: [
        `É importante não ser específico demais, tanto ao fazer quanto ao responder perguntas. Por exemplo, se o lugar for uma praia, perguntar: "Você usaria um biquíni neste lugar?" ou "Tem muita água aqui?" dará informação demais ao espião. Da mesma forma, se alguém perguntar se é um lugar divertido, responder: "Sim, se estiver quente o suficiente para nadar" ou "É, se você gosta de areia" seriam respostas ruins.`,
        `Todas as conversas devem ser públicas, para que todos possam ouvir. Lembre-se: se você conversar baixinho com o amigo ao seu lado para compartilhar suas ideias, ele pode ser o espião.`,
        `No começo de uma rodada, é melhor não fazer muitas perguntas a uma só pessoa de uma vez; em vez disso, tente fazer com que todos deem pelo menos um pouco de informação antes de decidir quem lhe parece suspeito.`,
        `Se você for o espião, tente ser vago nas suas respostas, mas também confiante. Dá para sair de quase qualquer situação se você agir como se soubesse o que está fazendo.`,
        `Preste atenção em quem fica quieto. Os espiões costumam falar o mínimo possível enquanto reúnem informação de todos os outros.`,
        `É tentador continuar fazendo perguntas até ter muita certeza de quem é o espião, mas quanto mais você fala, mais informação lhe dá. Se a rodada se arrastar por muito tempo, o espião provavelmente vai acabar adivinhando o lugar.`,
      ],
    },
    {
      heading: 'Modo ESL e tradução',
      paragraphs: [
        `Para tornar o jogo mais acessível a pessoas que não têm o inglês como primeira língua, incluímos a opção de limitar a lista de lugares possíveis a conjuntos que usam palavras mais simples e comuns. As opções baseiam-se aproximadamente nos níveis do Quadro Europeu Comum de Referência para Línguas (QECR), de A1 (iniciante/elementar) até C1 (avançado). Cada nível acrescenta mais palavras à lista, de modo que A2 inclui todos os lugares de A1, B1 inclui todos os de A1 e A2, e assim por diante.`,
        `Ter qualquer nível de ESL selecionado (ou seja, qualquer valor diferente de "Não") também ativará a opção de tradução. Com o tradutor ativo, assim que você virar a carta e vir o lugar, aparecerá a imagem de uma lupa com a palavra Traduzir embaixo. Aperte Traduzir para escolher um idioma e depois mova a lupa sobre o lugar.`,
      ],
    },
    {
      heading: 'Botões e som durante a partida',
      paragraphs: [
        `Assim que a rodada começa, uma música toca. Ela pode ser desligada reduzindo o volume a zero. Há também dois botões para controlar a faixa. O primeiro botão, à esquerda, pula para a próxima faixa. O botão da direita repete a faixa atual em loop, tocando-a de novo quando termina.`,
        `Apertar o botão Encerrar Jogo dará a opção de começar uma nova rodada com as mesmas configurações, apertando Próxima Rodada. Menu levará você de volta à tela inicial.`,
      ],
    },
  ],

  zh: [
    {
      heading: '游戏玩法',
      paragraphs: [
        `这是一个社交游戏，玩家通过向其他人提问来找出间谍。会有一名（或多名）玩家是间谍，他不知道展示给其他所有玩家的地点。间谍的目标是弄清楚地点是什么，同时隐藏自己的身份。其他玩家的目标是找出谁是间谍。`,
        `只需要一个人在手机上安装这个应用。选择参与游戏的总人数，然后按“开始”。每位玩家都要按一下卡片，让它翻转过来，显示两样东西之一：一个地点，或者“间谍”这个词。在每一轮中，所有不是间谍的玩家都会看到相同的地点。重要的是，翻看卡片时不能让其他人看到屏幕；同样重要的是，玩家在把手机传给下一个人之前，要再按一下屏幕，让卡片翻回原来的状态。`,
        `当所有玩家都翻看过卡片，看到了地点或“间谍”之后，这一轮就开始了。任何玩家都可以就这个地点向任何其他玩家提问。被问到的玩家必须以某种方式回答，向大家提供足够的信息，证明自己不是间谍、并且知道地点是什么。不过，他要小心，不要回答得过于透露地点的信息，否则会帮助间谍猜出地点。`,
        `一轮持续多久、提出多少问题，都没有限制。这一轮会一直进行，直到玩家们认为自己知道谁是间谍、并准备指认某人为止。一般来说，最好先提出至少两名、也许更多的嫌疑人，然后让所有人投票，选出他们认为是间谍的人。`,
        `一旦有一名玩家被指认为间谍，他不会立刻表明自己的身份，而是说出地点是什么。如果他不是间谍，他会知道答案。如果他是间谍，并且说对了地点，那就说明他是通过聆听其他玩家的提问和回答而推断出地点的。`,
        `如果玩家们指认的是另一名玩家为间谍，或者间谍被指认出来、却能正确说出地点，间谍就获胜。`,
        `如果间谍被成功找出、并且无法猜出地点，那么其他所有人就获胜。`,
      ],
    },
    {
      heading: '一些建议',
      paragraphs: [
        `无论是提问还是回答，都不要太具体，这一点很重要。例如，如果地点是海滩，那么问：“你会穿比基尼去这个地方吗？”或者“这里有很多水吗？”就会给间谍太多信息。同样，如果有人问这是不是一个好玩的地方，回答：“是的，只要天气暖和到可以游泳。”或者“如果你喜欢沙子的话，那就是。”都是不好的回答。`,
        `所有的对话都应该是公开的，让每个人都能听到。记住，如果你和旁边的朋友小声交谈、分享你的想法，他可能就是间谍。`,
        `在一轮开始的时候，最好不要一次向一个人问很多问题，而是尽量让每个人都至少提供一点信息，然后再决定你觉得谁可疑。`,
        `如果你是间谍，回答时要尽量含糊，但也要显得自信。只要你表现得好像知道自己在做什么，几乎任何场面你都能蒙混过去。`,
        `注意谁一直保持安静。间谍往往尽量少说话，同时从其他所有人那里收集信息。`,
        `人们总忍不住一直提问，直到非常确定谁是间谍为止；但你说得越多，给间谍的信息就越多。如果一轮持续了很长时间，间谍很可能会猜出地点。`,
      ],
    },
    {
      heading: 'ESL 模式与翻译',
      paragraphs: [
        `为了让母语不是英语的人也更容易上手，我们加入了一个选项，可以把可能出现的地点列表限制在使用更简单、更常见词汇的范围内。这些选项大致依据欧洲语言共同参考框架（CEFR）的等级，从 A1（入门/初级）到 C1（高级）。每升一个等级，列表里就会增加更多词，所以 A2 包含所有 A1 的地点，B1 包含所有 A1 和 A2 的地点，依此类推。`,
        `只要选择了任何一个 ESL 等级（也就是除“否”以外的任何值），就也会启用翻译功能。翻译功能开启后，当你翻开卡片、看到地点时，会出现一个放大镜的图案，下面写着“翻译”。点击“翻译”来选择一种语言，然后把放大镜移到地点上方。`,
      ],
    },
    {
      heading: '游戏进行中的按钮与声音',
      paragraphs: [
        `一轮开始后，就会播放音乐。把音量调到零就可以关掉它。另外还有两个按钮可以控制曲目。左边的第一个按钮会跳到下一首曲目。右边的按钮会循环播放当前曲目，在它结束后再重复播放。`,
        `按下“结束游戏”按钮后，会出现一个选项，可以通过按“下一轮”用相同的设置开始新的一轮。“菜单”会带你回到标题界面。`,
      ],
    },
  ],

  ja: [
    {
      heading: '遊び方',
      paragraphs: [
        `これは、他のプレイヤーに質問してスパイを見つけ出す、みんなで遊ぶゲームです。1人（または複数）のプレイヤーがスパイになり、他のすべてのプレイヤーに表示される場所を知りません。スパイの目的は、その場所が何かを突き止めながら、自分の正体を秘密にしておくことです。他のプレイヤーの目的は、誰がスパイかを見破ることです。`,
        `アプリをスマホに入れておく必要があるのは1人だけです。プレイする人数の合計を選んで、「スタート」を押してください。各プレイヤーはカードを押して裏返し、次の2つのうちどちらか一方を表示させます。場所、または「スパイ」という言葉です。各ラウンドで、スパイ以外のプレイヤー全員には同じ場所が示されます。カードをめくるときに他の人に画面を見られないようにすることが大切です。また、次のプレイヤーにスマホを渡す前に、もう一度画面を押してカードを元の状態に戻すことも大切です。`,
        `全員がカードをめくり、場所か「スパイ」のどちらかを見たら、ラウンドが始まります。どのプレイヤーも、他の誰に対しても、その場所について質問できます。質問されたプレイヤーは、自分がスパイではなく場所を知っていることをみんなに示せるだけの情報を与えるように答えなければなりません。ただし、場所について明かしすぎてスパイがそれを推測する助けにならないよう、答え方に気をつける必要があります。`,
        `1ラウンドの長さや質問の数に制限はありません。プレイヤーたちが誰がスパイか分かったと思い、誰かを告発する準備ができるまで、ラウンドは続きます。ふつうは、少なくとも2人、場合によってはもっと多くの容疑者を挙げて、誰がスパイだと思うかを全員で投票するのがよいでしょう。`,
        `あるプレイヤーがスパイとして選ばれても、すぐには自分の正体を明かしません。その代わりに、場所が何かを言います。もしその人がスパイでなければ、答えを知っているはずです。もしその人がスパイで、しかも場所を正しく当てたなら、それは他のプレイヤーの質問と答えを聞いて場所を推理したということです。`,
        `プレイヤーたちが別のプレイヤーをスパイとして選んだ場合、またはスパイが選ばれても場所を正しく言い当てられた場合、スパイの勝ちです。`,
        `スパイがうまく見つけ出され、しかも場所を当てられなかった場合は、他の全員の勝ちです。`,
      ],
    },
    {
      heading: 'いくつかのアドバイス',
      paragraphs: [
        `質問するときも答えるときも、具体的になりすぎないことが大切です。たとえば、場所がビーチの場合、「あなたはこの場所にビキニを着ていきますか？」や「ここには水がたくさんありますか？」と聞くと、スパイに情報を与えすぎてしまいます。同じように、楽しい場所かと聞かれて「はい、泳げるくらい暖かければ。」や「砂が好きならね。」と答えるのは、よくない答えです。`,
        `会話はすべて、みんなに聞こえるように公開で行うべきです。覚えておいてください。隣の友達と小声で話して自分の考えを伝えると、その友達がスパイかもしれません。`,
        `ラウンドの最初は、1人にいちどにたくさん質問しないほうがよいでしょう。むしろ、誰が怪しいと思うかを決める前に、全員に少しずつでも情報を出してもらうようにしましょう。`,
        `もしあなたがスパイなら、答えはあいまいに、でも自信ありげにしましょう。自分が何をしているか分かっているように振る舞えば、たいていの場面は切り抜けられます。`,
        `静かにしている人に注意しましょう。スパイは、他の全員から情報を集めながら、できるだけ話さないことが多いものです。`,
        `誰がスパイか確信が持てるまで質問を続けたくなりますが、話せば話すほど、スパイに情報を与えてしまいます。ラウンドがとても長く続くと、スパイはおそらく場所を突き止めるでしょう。`,
      ],
    },
    {
      heading: 'ESLモードと翻訳',
      paragraphs: [
        `英語が母語でない人にもこのゲームを楽しんでもらいやすくするため、出てくる可能性のある場所のリストを、もっと簡単でよく使われる言葉を使ったものに限定する選択肢を用意しました。この選択肢は、ヨーロッパ言語共通参照枠（CEFR）のレベルにおおよそ基づいており、A1（初心者・初級）からC1（上級）まであります。レベルが上がるごとにリストに単語が追加されるので、A2にはA1のすべての場所が含まれ、B1にはA1とA2のすべての場所が含まれる、という具合です。`,
        `ESLレベルのいずれか（つまり「なし」以外の値）を選ぶと、翻訳機能も有効になります。翻訳機能がオンのとき、カードをめくって場所を見ると、虫めがねの絵とその下に「翻訳」という言葉が表示されます。「翻訳」をタップして言語を選び、虫めがねを場所の上に動かしてください。`,
      ],
    },
    {
      heading: 'ゲーム中のボタンと音',
      paragraphs: [
        `ラウンドが始まると、音楽が流れます。音量をゼロにすれば消すことができます。また、曲を操作するボタンが2つあります。左側の最初のボタンは、次の曲に進みます。右側のボタンは、今の曲をループ再生し、終わるともう一度繰り返します。`,
        `「ゲーム終了」ボタンを押すと、「次のラウンド」を押すことで同じ設定で新しいラウンドを始める選択肢が出てきます。「メニュー」を押すと、タイトル画面に戻ります。`,
      ],
    },
  ],

  ko: [
    {
      heading: '게임 방법',
      paragraphs: [
        `이 게임은 다른 플레이어에게 질문을 던져 스파이를 찾아내는 사교 게임입니다. 한 명(또는 그 이상)의 플레이어가 스파이가 되며, 다른 모든 플레이어에게 보여지는 장소를 알지 못합니다. 스파이의 목표는 그 장소가 무엇인지 알아내는 동시에 자신의 정체를 비밀로 유지하는 것입니다. 다른 플레이어들의 목표는 누가 스파이인지 알아내는 것입니다.`,
        `앱은 한 사람의 휴대폰에만 있으면 됩니다. 게임에 참여하는 사람의 총 인원수를 선택한 뒤 '시작'을 누르세요. 각 플레이어는 카드를 눌러 뒤집어서 두 가지 중 하나를 확인합니다. 장소, 또는 '스파이'라는 단어입니다. 매 라운드마다 스파이가 아닌 모든 플레이어에게는 같은 장소가 주어집니다. 카드를 뒤집을 때 다른 사람이 화면을 보지 못하게 하는 것이 중요하며, 다음 플레이어에게 휴대폰을 넘기기 전에 화면을 다시 눌러 카드를 원래 상태로 되돌리는 것도 중요합니다.`,
        `모든 플레이어가 카드를 뒤집어 장소나 '스파이'를 확인하고 나면 라운드가 시작됩니다. 어떤 플레이어든 다른 어떤 플레이어에게도 장소에 대해 질문할 수 있습니다. 질문을 받은 플레이어는 자신이 스파이가 아니며 장소를 알고 있다는 것을 사람들에게 보여줄 만큼 충분한 정보를 주도록 대답해야 합니다. 다만, 장소에 대해 너무 많이 드러내어 스파이가 장소를 추측하는 데 도움이 되지 않도록 대답에 주의해야 합니다.`,
        `한 라운드가 얼마나 오래 지속되는지, 질문을 몇 개 하는지에는 제한이 없습니다. 라운드는 플레이어들이 누가 스파이인지 알았다고 생각하고 누군가를 지목할 준비가 될 때까지 계속됩니다. 보통은 적어도 두 명, 어쩌면 그 이상의 용의자를 정한 뒤, 모두가 스파이라고 생각하는 사람에게 투표하는 것이 좋습니다.`,
        `한 플레이어가 스파이로 지목되어도, 그 사람은 곧바로 자신의 정체를 밝히지 않습니다. 대신 장소가 무엇인지 말합니다. 그 사람이 스파이가 아니라면 답을 알고 있을 것입니다. 그 사람이 스파이인데도 장소를 맞혔다면, 그것은 다른 플레이어들의 질문과 대답을 듣고 장소를 추리해 냈다는 뜻입니다.`,
        `플레이어들이 다른 플레이어를 스파이로 지목하거나, 스파이가 지목되었더라도 장소를 정확히 말할 수 있으면 스파이가 이깁니다.`,
        `스파이가 성공적으로 밝혀지고 장소도 맞히지 못하면 나머지 사람들이 모두 이깁니다.`,
      ],
    },
    {
      heading: '몇 가지 조언',
      paragraphs: [
        `질문할 때나 대답할 때나 너무 구체적으로 하지 않는 것이 중요합니다. 예를 들어 장소가 해변이라면, "이곳에 비키니를 입고 가시겠어요?" 또는 "여기에는 물이 많나요?"라고 묻는 것은 스파이에게 너무 많은 정보를 줍니다. 마찬가지로 누군가 재미있는 곳이냐고 물었을 때 "네, 수영할 만큼 따뜻하다면요." 또는 "모래를 좋아한다면요."라고 대답하는 것은 좋지 않은 대답입니다.`,
        `모든 대화는 모두가 들을 수 있도록 공개적으로 이루어져야 합니다. 기억하세요. 옆에 있는 친구와 조용히 이야기하며 자신의 생각을 나눈다면, 그 친구가 스파이일 수도 있습니다.`,
        `라운드 초반에는 한 사람에게 한꺼번에 많은 질문을 하지 않는 것이 좋습니다. 그보다는 누가 의심스러운지 결정하기 전에 모두가 적어도 약간의 정보라도 내놓도록 하는 것이 좋습니다.`,
        `당신이 스파이라면 대답은 모호하게, 그러면서도 자신감 있게 하세요. 자신이 무엇을 하고 있는지 아는 것처럼 행동하면 거의 모든 상황을 빠져나갈 수 있습니다.`,
        `누가 조용히 있는지 주의 깊게 보세요. 스파이는 다른 모든 사람에게서 정보를 모으면서 가능한 한 말을 적게 하는 경우가 많습니다.`,
        `누가 스파이인지 확신이 들 때까지 계속 질문하고 싶어지지만, 말을 많이 할수록 스파이에게 더 많은 정보를 주게 됩니다. 라운드가 아주 오래 이어지면 스파이는 아마 장소를 알아낼 것입니다.`,
      ],
    },
    {
      heading: 'ESL 모드와 번역',
      paragraphs: [
        `영어가 모국어가 아닌 사람들도 게임을 더 쉽게 즐길 수 있도록, 가능한 장소 목록을 더 쉽고 흔한 단어를 사용하는 묶음으로 제한하는 옵션을 넣었습니다. 이 옵션은 대략 유럽 공통 언어 기준(CEFR) 등급에 기반하며, A1(초보/초급)부터 C1(고급)까지 있습니다. 등급이 올라갈 때마다 목록에 단어가 더해지므로, A2는 모든 A1 장소를 포함하고, B1은 모든 A1과 A2 장소를 포함하는 식입니다.`,
        `ESL 등급 중 아무거나(즉 '아니요'를 제외한 어떤 값이든) 선택하면 번역 기능도 켜집니다. 번역 기능이 켜진 상태에서 카드를 뒤집어 장소를 보면, 돋보기 그림과 그 아래에 '번역'이라는 단어가 나타납니다. '번역'을 눌러 언어를 선택한 다음, 돋보기를 장소 위로 옮기세요.`,
      ],
    },
    {
      heading: '게임 진행 중 버튼과 소리',
      paragraphs: [
        `라운드가 시작되면 음악이 재생됩니다. 볼륨을 0으로 낮추면 끌 수 있습니다. 또한 트랙을 조절하는 버튼이 두 개 있습니다. 왼쪽의 첫 번째 버튼은 다음 트랙으로 넘어갑니다. 오른쪽 버튼은 현재 트랙을 반복 재생하여, 끝나면 다시 처음부터 틀어 줍니다.`,
        `'게임 종료' 버튼을 누르면 '다음 라운드'를 눌러 같은 설정으로 새 라운드를 시작할 수 있는 선택지가 나타납니다. '메뉴'를 누르면 제목 화면으로 돌아갑니다.`,
      ],
    },
  ],

  vi: [
    {
      heading: 'Cách chơi',
      paragraphs: [
        `Đây là một trò chơi giao tiếp, trong đó người chơi đặt câu hỏi cho những người khác để tìm ra gián điệp. Một (hoặc nhiều) người chơi sẽ là gián điệp, và sẽ không biết địa điểm được hiển thị cho tất cả những người chơi còn lại. Mục tiêu của gián điệp là tìm ra địa điểm đó là gì, đồng thời giữ bí mật danh tính của mình. Mục tiêu của những người chơi khác là tìm ra ai là gián điệp.`,
        `Chỉ cần một người có ứng dụng trên điện thoại. Hãy chọn tổng số người tham gia chơi, rồi nhấn Bắt đầu. Mỗi người chơi nhấn vào lá bài để lật lên và hiện ra một trong hai thứ: một địa điểm, hoặc từ "Gián điệp". Trong mỗi vòng, tất cả những người chơi không phải là gián điệp sẽ được cho biết cùng một địa điểm. Điều quan trọng là không ai khác được nhìn thấy màn hình khi lá bài được lật, và cũng quan trọng không kém là người chơi phải nhấn vào màn hình lần nữa để lật lá bài về trạng thái ban đầu trước khi chuyền điện thoại cho người tiếp theo.`,
        `Khi tất cả người chơi đã lật bài và nhìn thấy địa điểm hoặc từ "Gián điệp", vòng chơi bắt đầu. Bất kỳ người chơi nào cũng có thể hỏi bất kỳ người nào khác một câu hỏi về địa điểm. Người được hỏi phải trả lời theo cách cung cấp đủ thông tin cho cả nhóm để chứng tỏ rằng mình không phải là gián điệp và biết địa điểm là gì. Tuy nhiên, họ cần cẩn thận để không trả lời theo cách tiết lộ quá nhiều về địa điểm, vì điều đó sẽ giúp gián điệp đoán ra nó.`,
        `Không có giới hạn nào về việc một vòng kéo dài bao lâu hay có bao nhiêu câu hỏi được đặt ra. Vòng chơi tiếp tục cho đến khi người chơi nghĩ rằng họ đã biết ai là gián điệp và sẵn sàng chỉ ra một người nào đó. Nói chung, nên đưa ra ít nhất hai người tình nghi, có thể nhiều hơn, rồi để mọi người bỏ phiếu chọn người mà họ cho là gián điệp.`,
        `Khi một người chơi đã bị chọn là gián điệp, người đó không lập tức tiết lộ danh tính của mình: thay vào đó, họ nói ra địa điểm là gì. Nếu họ không phải là gián điệp, họ sẽ biết câu trả lời. Nếu họ là gián điệp mà vẫn nói đúng địa điểm, điều đó có nghĩa là họ đã đoán ra địa điểm nhờ lắng nghe câu hỏi và câu trả lời của những người chơi khác.`,
        `Gián điệp thắng nếu người chơi chọn nhầm một người khác là gián điệp, hoặc nếu họ bị chọn nhưng nói đúng được địa điểm.`,
        `Tất cả những người còn lại thắng nếu gián điệp bị tìm ra và không thể đoán được địa điểm.`,
      ],
    },
    {
      heading: 'Một vài lời khuyên',
      paragraphs: [
        `Điều quan trọng là đừng quá cụ thể, cả khi đặt câu hỏi lẫn khi trả lời. Ví dụ, nếu địa điểm là một bãi biển, thì hỏi: "Bạn có mặc bikini đến nơi này không?" hoặc "Ở đây có nhiều nước không?" sẽ cho gián điệp quá nhiều thông tin. Tương tự, nếu ai đó hỏi đây có phải là một nơi vui không, thì trả lời: "Có, nếu trời đủ ấm để bơi." hoặc "Có, nếu bạn thích cát." sẽ là những câu trả lời dở.`,
        `Mọi cuộc trò chuyện đều phải công khai, để ai cũng nghe được. Hãy nhớ, nếu bạn nói nhỏ với người bạn ngồi bên cạnh để chia sẻ suy nghĩ của mình, thì biết đâu chính người đó lại là gián điệp.`,
        `Vào đầu mỗi vòng, tốt nhất là đừng hỏi một người quá nhiều câu hỏi cùng một lúc, mà hãy cố gắng để mọi người đều đưa ra ít nhất một chút thông tin, trước khi bạn quyết định ai là người đáng nghi.`,
        `Nếu bạn là gián điệp, hãy cố trả lời mơ hồ, nhưng cũng phải tự tin. Bạn có thể thoát khỏi hầu hết mọi tình huống nếu hành động như thể mình biết rõ mình đang làm gì.`,
        `Hãy để ý xem ai đang im lặng. Gián điệp thường nói càng ít càng tốt, trong khi thu thập thông tin từ tất cả những người khác.`,
        `Bạn sẽ rất muốn tiếp tục đặt câu hỏi cho đến khi thật chắc chắn ai là gián điệp, nhưng càng nói nhiều, bạn càng cung cấp nhiều thông tin cho họ. Nếu một vòng kéo dài quá lâu, gián điệp rất có thể sẽ đoán ra địa điểm.`,
      ],
    },
    {
      heading: 'Chế độ ESL và dịch thuật',
      paragraphs: [
        `Để trò chơi dễ tiếp cận hơn với những người không nói tiếng Anh như tiếng mẹ đẻ, chúng tôi đã thêm tùy chọn giới hạn danh sách các địa điểm có thể xuất hiện thành các nhóm địa điểm sử dụng từ ngữ đơn giản và thông dụng hơn. Các tùy chọn này dựa một cách tương đối vào các cấp độ của Khung Tham chiếu Chung Châu Âu về Ngôn ngữ (CEFR), từ A1 (mới bắt đầu/sơ cấp) đến C1 (nâng cao). Mỗi cấp độ thêm nhiều từ hơn vào danh sách, nên A2 sẽ bao gồm tất cả các địa điểm của A1, B1 sẽ bao gồm tất cả các địa điểm của A1 và A2, v.v.`,
        `Việc chọn bất kỳ cấp độ ESL nào (tức là bất kỳ giá trị nào khác "Không") cũng sẽ kích hoạt tùy chọn dịch. Khi trình dịch đang bật, ngay sau khi bạn lật lá bài và nhìn thấy địa điểm, sẽ có hình một chiếc kính lúp với chữ Dịch ở bên dưới. Nhấn vào Dịch để chọn một ngôn ngữ, rồi di chuyển kính lúp lên trên địa điểm.`,
      ],
    },
    {
      heading: 'Các nút và âm thanh trong khi chơi',
      paragraphs: [
        `Khi vòng chơi bắt đầu, nhạc sẽ phát. Bạn có thể tắt nhạc bằng cách giảm âm lượng về không. Ngoài ra còn có hai nút để điều khiển bản nhạc. Nút thứ nhất, ở bên trái, sẽ chuyển sang bản nhạc tiếp theo. Nút bên phải sẽ lặp lại bản nhạc hiện tại, phát lại nó sau khi kết thúc.`,
        `Nhấn nút Kết thúc trò chơi sẽ cho bạn lựa chọn bắt đầu một vòng mới với cùng các thiết lập, bằng cách nhấn Vòng tiếp theo. Menu sẽ đưa bạn trở lại màn hình chính.`,
      ],
    },
  ],

  th: [
    {
      heading: 'วิธีเล่น',
      paragraphs: [
        `นี่คือเกมเข้าสังคมที่ผู้เล่นจะถามคำถามผู้เล่นคนอื่น ๆ เพื่อหาตัวสายลับ ผู้เล่นหนึ่งคน (หรือมากกว่า) จะเป็นสายลับ และจะไม่รู้สถานที่ที่แสดงให้ผู้เล่นคนอื่นทุกคนเห็น เป้าหมายของสายลับคือหาให้ได้ว่าสถานที่นั้นคืออะไร พร้อมกับเก็บตัวตนของตนเองไว้เป็นความลับ ส่วนเป้าหมายของผู้เล่นคนอื่น ๆ คือการหาให้ได้ว่าใครคือสายลับ`,
        `มีเพียงคนเดียวเท่านั้นที่ต้องมีแอปนี้อยู่ในโทรศัพท์ เลือกจำนวนคนที่เล่นทั้งหมด แล้วกดเริ่ม ผู้เล่นแต่ละคนต้องกดที่การ์ดเพื่อพลิกกลับและเผยสิ่งหนึ่งในสองอย่าง คือ สถานที่ หรือคำว่า "สายลับ" ในแต่ละรอบ ผู้เล่นทุกคนที่ไม่ใช่สายลับจะได้เห็นสถานที่เดียวกัน เป็นเรื่องสำคัญที่จะต้องไม่ให้คนอื่นเห็นหน้าจอตอนที่พลิกการ์ด และสำคัญเช่นกันที่ผู้เล่นต้องกดที่หน้าจออีกครั้งเพื่อพลิกการ์ดกลับสู่สภาพเดิม ก่อนจะส่งโทรศัพท์ให้ผู้เล่นคนถัดไป`,
        `เมื่อผู้เล่นทุกคนได้พลิกการ์ดและเห็นสถานที่หรือคำว่า "สายลับ" แล้ว รอบการเล่นก็จะเริ่มขึ้น ผู้เล่นคนใดก็ได้สามารถถามคำถามเกี่ยวกับสถานที่กับผู้เล่นคนอื่นคนใดก็ได้ ผู้เล่นคนนั้นต้องตอบในแบบที่ให้ข้อมูลแก่กลุ่มมากพอที่จะแสดงว่าตนไม่ใช่สายลับและรู้ว่าสถานที่คืออะไร อย่างไรก็ตาม เขาต้องระวังที่จะไม่ตอบในแบบที่เปิดเผยเกี่ยวกับสถานที่มากเกินไป ซึ่งจะช่วยให้สายลับเดาออกว่าเป็นที่ไหน`,
        `ไม่มีการจำกัดว่าหนึ่งรอบจะยาวนานแค่ไหน หรือถามคำถามได้กี่ข้อ รอบจะดำเนินต่อไปจนกว่าผู้เล่นจะคิดว่าพวกเขารู้แล้วว่าใครคือสายลับ และพร้อมที่จะชี้ตัวใครสักคน โดยทั่วไป เป็นความคิดที่ดีที่จะเสนอผู้ต้องสงสัยอย่างน้อยสองคน หรืออาจมากกว่านั้น แล้วให้ทุกคนโหวตว่าคิดว่าใครเป็นสายลับ`,
        `เมื่อผู้เล่นคนหนึ่งถูกเลือกว่าเป็นสายลับ เขาจะไม่เปิดเผยตัวตนของตนในทันที แต่จะบอกแทนว่าสถานที่คืออะไร ถ้าเขาไม่ใช่สายลับ เขาก็จะรู้คำตอบ ถ้าเขาเป็นสายลับและบอกสถานที่ถูกต้อง นั่นหมายความว่าเขาเดาสถานที่ออกจากการฟังคำถามและคำตอบของผู้เล่นคนอื่น ๆ`,
        `สายลับชนะ ถ้าผู้เล่นเลือกผู้เล่นอีกคนหนึ่งว่าเป็นสายลับ หรือถ้าตัวเขาถูกเลือกแต่สามารถบอกสถานที่ได้อย่างถูกต้อง`,
        `คนอื่น ๆ ทั้งหมดชนะ ถ้าสายลับถูกจับได้สำเร็จและไม่สามารถเดาสถานที่ได้`,
      ],
    },
    {
      heading: 'คำแนะนำเล็กน้อย',
      paragraphs: [
        `เป็นเรื่องสำคัญที่จะไม่เจาะจงมากเกินไป ทั้งตอนถามและตอนตอบคำถาม ตัวอย่างเช่น ถ้าสถานที่คือชายหาด การถามว่า "คุณจะใส่บิกินีไปที่แห่งนี้ไหม" หรือ "ที่นี่มีน้ำเยอะไหม" จะให้ข้อมูลแก่สายลับมากเกินไป ในทำนองเดียวกัน ถ้ามีคนถามว่าที่นี่เป็นที่สนุกไหม การตอบว่า "สนุก ถ้าอากาศอุ่นพอที่จะว่ายน้ำได้" หรือ "สนุก ถ้าคุณชอบทราย" ก็เป็นคำตอบที่ไม่ดี`,
        `บทสนทนาทั้งหมดควรเป็นแบบเปิดเผย เพื่อให้ทุกคนได้ยิน จำไว้ว่า ถ้าคุณกระซิบคุยกับเพื่อนที่อยู่ข้าง ๆ เพื่อแบ่งปันความคิดของคุณ เพื่อนคนนั้นอาจเป็นสายลับก็ได้`,
        `ในช่วงต้นของรอบ เป็นความคิดที่ดีที่จะไม่ถามคนคนเดียวหลาย ๆ คำถามในคราวเดียว แต่ควรพยายามให้ทุกคนให้ข้อมูลอย่างน้อยสักเล็กน้อย ก่อนที่คุณจะตัดสินใจว่าคิดว่าใครน่าสงสัย`,
        `ถ้าคุณเป็นสายลับ จงพยายามตอบแบบคลุมเครือ แต่ก็ต้องดูมั่นใจด้วย คุณสามารถเอาตัวรอดจากเกือบทุกสถานการณ์ได้ ถ้าคุณทำตัวราวกับว่ารู้ดีว่ากำลังทำอะไรอยู่`,
        `จงสังเกตว่าใครกำลังเงียบ สายลับมักจะพูดให้น้อยที่สุดเท่าที่จะทำได้ ในขณะที่รวบรวมข้อมูลจากคนอื่น ๆ ทุกคน`,
        `มันยั่วใจให้ถามคำถามต่อไปเรื่อย ๆ จนกว่าจะมั่นใจมากว่าใครคือสายลับ แต่ยิ่งคุณพูดมากเท่าไร คุณก็ยิ่งให้ข้อมูลแก่เขามากเท่านั้น ถ้ารอบดำเนินไปนานมาก สายลับก็มีแนวโน้มที่จะเดาสถานที่ออก`,
      ],
    },
    {
      heading: 'โหมด ESL และการแปล',
      paragraphs: [
        `เพื่อให้เกมเข้าถึงได้ง่ายขึ้นสำหรับคนที่ไม่ได้ใช้ภาษาอังกฤษเป็นภาษาแม่ เราได้ใส่ตัวเลือกในการจำกัดรายการสถานที่ที่เป็นไปได้ ให้เหลือเป็นชุดที่ใช้คำที่ง่ายกว่าและพบบ่อยกว่า ตัวเลือกเหล่านี้อิงอยู่กับระดับของกรอบอ้างอิงร่วมยุโรปสำหรับภาษา (CEFR) อย่างคร่าว ๆ ตั้งแต่ A1 (เริ่มต้น/ระดับพื้นฐาน) ไปจนถึง C1 (ระดับสูง) แต่ละระดับจะเพิ่มคำเข้าไปในรายการมากขึ้น ดังนั้น A2 จะรวมสถานที่ทั้งหมดของ A1, B1 จะรวมสถานที่ทั้งหมดของ A1 และ A2 เป็นต้น`,
        `การเลือกระดับ ESL ระดับใดก็ตาม (นั่นคือค่าใด ๆ ที่ไม่ใช่ "ไม่") จะเปิดใช้งานตัวเลือกการแปลด้วย เมื่อเปิดตัวแปลอยู่ ทันทีที่คุณพลิกการ์ดและเห็นสถานที่ จะมีรูปแว่นขยายพร้อมคำว่า แปล อยู่ด้านล่าง แตะที่ แปล เพื่อเลือกภาษา แล้วเลื่อนแว่นขยายไปไว้เหนือสถานที่`,
      ],
    },
    {
      heading: 'ปุ่มและเสียงระหว่างเล่นเกม',
      paragraphs: [
        `เมื่อรอบเริ่มขึ้น เพลงจะเล่น คุณสามารถปิดเพลงได้โดยลดระดับเสียงลงเป็นศูนย์ นอกจากนี้ยังมีปุ่มสองปุ่มสำหรับควบคุมเพลง ปุ่มแรกทางด้านซ้ายจะข้ามไปยังเพลงถัดไป ปุ่มทางด้านขวาจะเล่นเพลงปัจจุบันวนซ้ำ โดยเล่นใหม่อีกครั้งเมื่อจบ`,
        `การกดปุ่ม จบเกม จะให้ตัวเลือกในการเริ่มรอบใหม่ด้วยการตั้งค่าเดิม โดยการกด รอบถัดไป ส่วน เมนู จะพาคุณกลับไปยังหน้าจอหลัก`,
      ],
    },
  ],
};
