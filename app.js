class Post {
    constructor(id, date, title, text, tags) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.text = text;
        this.tags = tags;
    }
};

class Project {
    constructor(name, dateStarted, contributors, img, description, technologies, link) {
        this.name = name;
        this.dateStarted = dateStarted;
        this.contributors = contributors;
        this.img = img;
        this.description = description;
        this.technologies = technologies;
        this.link = link;
    }
};

Vue.component('achievement',{
    template: `<slot></slot>`
});

var app = new Vue({
    el: '#root',
    data: {
        toShow: "home",
        blogColours: ["is-dark","is-primary","is-link","is-info","is-success",
        "is-warning","is-danger"],
        projectList: [
            new Project("Vuetify-Abstractified: Vue Framework","26/01/19",
            "Mark Sonn, Max Caminer, Jeremy Lim","src/assets/vuetify.png",``,
            ["HTML","CSS","JavaScript","Vue","Vuetify"],"https://github.com/MarkSonn/Vuetify-Abstractified"),
            new Project("UlquiorraTCG: Pokemon Blog","21/01/19","Jeremy Lim",
            "src/assets/pokeball.png",``,["HTML","CSS","JavaScript","Vue","Bulma"],
            "https://ulquiorra-tcg.herokuapp.com")
        ],
        blogPosts: [new Post(1,"29/01/19","Vue-ing Opportunities and Challenges",`
        If someone asked me how 2019 has been going for me thus far, I could respond back
        with a word that encapsulates what the year has become for me: <b>Discovery</b>.
        </br> </br> What had been a word that plagued and demonised my HSC English studies,
        has now become the definition of how I am approaching 2019. Weirdly enough,
        I am experiencing the same ordeals and pains of the titular character
        in Life of Pi in order to discover, although not literally.
        </br> </br> My holidays would have been very dull if I had not taken the
        initiatives to learn a bit of front-end web development or applied for multiple
        internships and jobs. My 4-hour technical interview, in a company I wanted to work for,
        ended in a rejection I probably saw coming from a mile away. It wasn't my lack
        of self-confidence, but I believed I was simply underprepared for the role
        they wanted to provide. However, this rejection had been a highlight to my front-end
        discoveries, instead allowing me to gain valuable experience in JavaScript and Vue.
        It's not an over-exaggeration to say I learnt everything I had to do in the time
        limit of the technical interview, but it was nice for me to now be able to confidently
        explain what v-bind, props and to not waste an hour forgetting to add a colon before an element.
        </br> </br> The aftermath of my technical interview brought me new skills to
        tackle the experience programmers glorify: projects! I decided to progress
        past JavaScript to learn Vue mainly because one of my Social Subcommittee
        Directors invited me to help collaborate on a front-end project alongside another acquaintance.
        So far, I am learning more and more about Vue with each component I create
        for the project (I would use the phrase 'gaining momentum' for this).
        In hindsight, this development has been the result of my internship
        rejection; so hard feelings! :)
        </br> - Jeremy
        `, ["Projects"]),
        new Post(0,"22/01/19","Launch",`
        I am planning on launching a trifecta of blogs and you must be wondering:
        why do they all look the same?
        </br> </br> I love the stylish look of Bulma but being a triple project I
        plan on updating over my studies, I'd rather start with keeping
        them consistent and functioning for now.
        </br> Some of my goals for 2019 include: learning React, developing a proper database
        (possibly with Node.js). I believe this is a good place to start!
        </br> </br> As for my triple project, what are they?
        </br> My first blog is already hosted on Heroku, known as
        <a href="https://ulquiorra-tcg.herokuapp.com" target="_blank">UlquiorraTCG</a>
        and it is a PERSONAL Pokemon blog based on my own travels and competitive
        career.
        </br> My second blog will be this one to showcase the projects I work on,
        as well as things I learn.
        </br> My third blog is a particularly large project, which is an extension of UlquiorraTCG,
        which I will collaborate with prominent Australian Pokemon TCG players
        to create a database of tournament results and decklists for the Oceanic scene.
        </br> </br> My style will change over time and will be very evident as I get more
        experience, and all these improvements can be found on my GitHub page.
        </br> Thanks for reading and I will post more soon :)
        </br> - Jeremy
        `, ["Projects", "Personal"])]
    },
    methods: {
        getClass(id) {
            return this.blogColours[id % 7];
        }
    }
})
