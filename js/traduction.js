const langSec = document.querySelector('.dropdown-content');
const buttons = document.querySelectorAll('.dropdown-content a');

const chiSiamo = document.querySelector('.chiSiamo');
const chiSiamoDesc = document.querySelector('.chiSiamoDesc');
const lingua = document.querySelector('.lingua')
const servizi = document.querySelector('.servizi')
const contatti = document.querySelector('.contatti')
const contattaci = document.querySelector('.contattaci')
const contattaci_desc = document.querySelector('.contattaci_desc')
const servizi_desc = document.querySelector('.servizi_desc')
const mission = document.querySelector('.mission')
const pollastri_story = document.querySelector('.pollastri_story')
const cossu_story = document.querySelector('.cossu_story')
const leonetti_story = document.querySelector('.leonetti_story')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language')

        chiSiamo.textContent = data[attr].chiSiamo;
        chiSiamoDesc.textContent = data[attr].chiSiamoDesc;
        lingua.textContent = data[attr].lingua;
        servizi.textContent = data[attr].servizi;
        contatti.textContent = data[attr].contatti;
        contattaci.textContent = data[attr].contattaci;
        contattaci_desc.textContent = data[attr].contattaci_desc;
        servizi_desc.textContent = data[attr].servizi_desc;
        mission.textContent = data[attr].mission;
        pollastri_story.textContent = data[attr].pollastri_story;
        cossu_story.textContent = data[attr].cossu_story;
        leonetti_story.textContent = data[attr].leonetti_story;
    });
});

const data = {
    "italian": {
        "chiSiamo": 'CHI SIAMO',
        "chiSiamoDesc": "WHY è una società di consulenza che abbraccia ogni aspetto del business DIY in un contesto a 360 gradi. Il  nostro impegno si rivolge non solo al mercato italiano, ma si estende anche a livello internazionale, conferendo a Why una prospettiva globale.  La nostra crescita, partita con tre fondatori, conta ora 18 società che operano a livello internazionale, rappresentando solo l’inizio di un percorso basato sulla condivisione, competenza e consapevolezza",
        "lingua": "LINGUA",
        "servizi":"Servizi",
        "contatti":"Contatti",
        "contattaci":"Contattaci",
        "contattaci_desc":"Per qualsiasi domanda, suggerimento o richiesta di informazioni, non esitare a contattarci. Siamo qui per aiutarti.",
        "servizi_desc":"Diamo supporto ad aziende italiane nel migliorare il loro business sia a livello nazionale sia internazionale. In un contesto di globalizzazione, ci proponiamo come punto di riferimento, con umiltà, determinazione e positività, per trovare opportunità e soluzioni nel settore della vendita e della distribuzione internazionale. Dalla nostra esperienza ventennale nelle licenze, possiamo guidare le aziende interessate a questo modello di business. Prestiamo particolare attenzione a temi come sostenibilità collaborando con primarie aziende che detengono brevetti internazionali. Grazie alla collaborazione con società specializzate in transizione tecnologica, possiamo proporre soluzioni innovative in ambito AI e Blockchain",
        "mission":"Riunendo organizzazioni professionali con una media di 30 anni di esperienza, offriamo servizi di consulenza focalizzati sulla vendita, il marketing e altri aspetti cruciali nei settori in cui operiamo. Ci rivolgiamo anche ad aziende straniere desiderose di entrare nel mercato italiano, fornendo loro una struttura di filiale su cui contare per comprendere e penetrare il mercato.",
        "pollastri_story":"Classe 1971  Mantovano , di estrazione tecnica ,  negli  anni 90 inizia   la sua esperienza lavorativa  in una primaria azienda  nell’impiantistica petrolifera. La curiosità lo parta a spingersi sempre oltre alla zona di confort ed ad intraprendere nuove sfide professionali , lavorando all’estero come resident e poi come tecnico-commerciale per aziende Italiane. Negli ultimi 20 anni sviluppa la sua esperienza professionale in ambito commerciale   B2B  che in  B2C  in mercati specifici Ferramenta / Utensileria /Specialisti pulizia. Prossime sfide professionali ?  Aiutare gli imprenditori  a cogliere le  opportunità derivanti nell’adozione   del AI  e della Blockchain nei processi industriali .",
        "cossu_story":"Ha iniziato la sua carriera commerciale come \"self-made man\", fissando appuntamenti e cercando di ottenere ordini. Questa esperienza lo ha forgiato. Successivamente, ha lavorato per 20 anni come Dirigente Commerciale in varie aziende del settore Consumer/DIY. Questo gli ha permesso di lavorare in team, crescere e comprendere l'importanza della condivisione e della responsabilità. Nonostante abbia superato i 60 anni, ha deciso di intraprendere un nuovo percorso con i suoi amici e colleghi più stretti, basato sul loro amore per il lavoro. Le sue competenze principali sono: 1. OEM Business; 2. Distribuzione DIY Worldwide; 3. License Business.",
        "leonetti_story":"Bellunese di nascita figlio del mondo di adozione partendo dalle acque del Piave solca dal 1988 i mari del mondo lavorativo. Con oltre 30 anni di esperienza nel mercato  Do It Yourself vanta profonde conoscenze nei canali specifici specifici come quelli della Ferramenta/ Utensileria/ Automotive e molti altri ancora. Convinto assertore delle dinamiche dell'omnicanalità applicata al canale lungo della distribuzione e attento osservatore di tutte le nuove frontiere che si sono aperte e che si stanno aprendo sul tema sostenibilità ed economica circolare. La lungimiranza la sua principale dote, la condivisione il suo credo quotidiano."
    },
    "english": {
        "chiSiamo": 'WHO WE ARE',
        "chiSiamoDesc": 'WHY is a consulting company that embraces every aspect of the DIY business in a 360-degree context. Our commitment is aimed not only at the Italian market, but also extends internationally, giving Why a global perspective. Our growth, started with three founders, now counts 18 companies operating internationally, representing only the beginning of a path based on sharing, expertise and awareness.',
        "lingua": "LANGUAGE",
        "servizi":"Services",
        "contatti":"Contacts",
        "contattaci":"Contact us",
        "contattaci_desc":"For any questions, suggestions or requests for information, do not hesitate to contact us. We are here to help you.",
        "servizi_desc":"We support Italian companies in improving their business both nationally and internationally. In a context of globalization, we propose ourselves as a reference point, with humility, determination and positivity, to find opportunities and solutions in the international sales and distribution sector. From our twenty-year experience in licenses, we can guide companies interested in this business model. We pay particular attention to issues such as sustainability by collaborating with leading companies holding international patents. Thanks to the collaboration with companies specializing in technological transition, we can propose innovative solutions in the field of AI and Blockchain.",
        "mission":"Bringing together professional organizations with an average of 30 years of experience, we offer consulting services focused on sales, marketing and other crucial aspects in the sectors in which we operate. We also address foreign companies wishing to enter the Italian market, providing them with a branch structure on which to rely to understand and penetrate the market.",
        "pollastri_story":"Born in the Mantua area in 1971, of technical extraction, in the 90s begins his work experience in a leading company in the oil plant. Curiosity leads him to push himself beyond the comfort zone and to undertake new professional challenges, working abroad as a resident and then as a technical-commercial for Italian companies. In the last 20 years he has developed his professional experience in the commercial field B2B and B2C in specific markets Hardware / Tools / Cleaning Specialists. Next professional challenges? Help entrepreneurs seize the opportunities arising from the adoption of AI and Blockchain in industrial processes.",
        "cossu_story":"He began his commercial career as a \"self-made man\", setting appointments and trying to get orders. This experience shaped him. Subsequently, he worked for 20 years as a Commercial Executive in various companies in the Consumer/DIY sector. This allowed him to work in a team, grow, and understand the importance of sharing and responsibility. Despite being over 60 years old, he decided to embark on a new path with his closest friends and colleagues, based on their love for work. His main skills are: 1. OEM Business; 2. DIY Distribution Worldwide; 3. License Business.",
        "leonetti_story": "Born in Belluno, son of the world by adoption starting from the waters of the Piave, he has been sailing the seas of the working world since 1988. With over 30 years of experience in the Do It Yourself market, he boasts deep knowledge in specific channels such as Hardware / Tools / Automotive and many others. Convinced supporter of the dynamics of omnichannel applied to the long distribution channel and careful observer of all the new frontiers that have opened and are opening on the theme of sustainability and circular economy. Foresight is his main gift, sharing his daily creed."
    }
}