export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  intro: string;
  paragraphs: string[];
}

export interface Poem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  intro: string;
  lines: string[];
}

export interface FictionChapter {
  id: string;
  title: string;
  subtitle?: string;
  intro?: string;
  paragraphs: string[];
}

export interface WritingPortfolioData {
  name: string;
  tagline: string;
  email: string;
  substack: string;
  phone: string;
  location: string;
  bioPlaceholder: string;
  essays: Essay[];
  poems: Poem[];
  fiction: {
    title: string;
    description: string;
    chapters: FictionChapter[];
  };
}

export const writingData: WritingPortfolioData = {
  name: "Ayomide Oluyemi",
  tagline: "Essays, reflections & short fiction",
  email: "ayomideoluyemi8@gmail.com",
  substack: "ayomideoluyemi.substack.com",
  phone: "+234 810 10 82258",
  location: "Lagos, Nigeria",
  bioPlaceholder: `I'm Ayomide Oluyemi, a writer drawn to the parts of life people feel but rarely say out loud — overthinking, grief, longing, the strange comedy of a crush. I write to name what's usually left unspoken, and to make readers feel a little less alone in whatever they're carrying.

My writing lives at the intersection of reflection and storytelling: personal essays and poetry that sit with a feeling until it makes sense, and short fiction that borrows real emotional texture to build character. I've spent the last few years writing consistently on my Substack, Ayo's Thoughts, where I explore themes of emotional awareness, grief, love, and growing up.

Alongside writing, I bring a background in communications and graphic design, having served as Public Relations Officer for my university's computing students' association — so I think about how a piece of writing looks and travels, not just how it reads.`,
  essays: [
    {
      id: "little-miss-not-so-aware",
      title: "Little Miss Not-So-Aware, innit?",
      subtitle: "Personal essay · May 2026",
      date: "May 2026",
      intro: "On discovering, later than expected, that being self-aware and being in touch with your emotions are not the same thing.",
      paragraphs: [
        "To whoever cares to read,",
        "I think I might have an overthinking problem, or an “its-deep syndrome”, it's both a blessing and a curse.",
        "Sometimes, I wish I could be nonchalant, truly, and not just to act like it. Even in situations when I try fooling myself into acting like I don't care, best believe I've replayed, analyzed the situation repeatedly.",
        "For someone that considers herself as highly self-aware, it took me a while to realize that I am emotionally sensitive, not that I didn't know I felt deeply, I just never labeled it or even acknowledged it.",
        "It probably stems from my past of suppressing emotions (don't worry, I'm much better. Still working on it but better 😅), I think I gaslit myself into thinking things didn't get to me as much as they actually did.",
        "I've come to terms with it. I feel deeply, intensely, a little too much sometimes, I'm not as invincible to hurt as I thought I was, and being emotionally sensitive or perceptive or empathetic, whatever you may call it, isn't until I bawl my eyes out or tear up at an event or situation I experience.",
        "It just means I feel more deeply, both the highs and lows, the joys and woes,",
        "I care more than I let on, more than I say."
      ]
    },
    {
      id: "this-thing-called-grief",
      title: "This Thing Called Grief",
      subtitle: "Personal essay · May 2026",
      date: "May 2026",
      intro: "Widening the definition of grief beyond loss of a person, to the quieter grief of what could have been.",
      paragraphs: [
        "I've always wanted to talk about grief, to write about it, but it just seems like I have so little to say and yet so much is unspoken.",
        "I have these seasons in my life, where particular topics or themes become more recurrent, it could be through my friends, events happening around me or even myself.",
        "The theme that has become more recurrent lately is grief, and no, I don't just mean the kind you feel when a loved one dies, I mean the kind you get from mourning what could have been or shouldn't have been. The kind that weighs on your mind for hours, days, weeks, years. The sadness of something that shouldn't have happened or you wished didn't happen, the loss of something you never truly had in the first place, mourning what could have been.",
        "Grief is complex, it shows up in diverse ways. It takes its sweet time and I don't think it ever fully disappears, it just takes a new form at each point in our lives.",
        "What a bittersweet gift it is, to feel deeply enough to grieve 🤍."
      ]
    }
  ],
  poems: [
    {
      id: "love",
      title: "Love?",
      subtitle: "Poetry · March 2026",
      date: "March 2026",
      intro: "A short poem on a quiet, wordless kind of love — one shown rather than spoken.",
      lines: [
        "I love the gentleness with which he handles me.",
        "I love his openness.",
        "It scares me,",
        "How can one be so sincere with their feelings?",
        "It scares me,",
        "he seems to have almost all the right words.",
        "I love how he holds space for me.",
        "Almost like I'm the main character in his story.",
        "This isn't a story of physical love.",
        "It's one that speaks love without professing it in words.",
        "This is the kind that holds space for another.",
        "This love is carried in the sincerity of his eyes,",
        "in the quiet gentleness with which he cares for me.",
        "This is the kind that kills me with kindness.",
        "This love lives rent-free in my head."
      ]
    },
    {
      id: "what-happened-after-the-pandemic",
      title: "What Happened After the Pandemic?",
      subtitle: "Poetry · January 2026",
      date: "January 2026",
      intro: "A seasons-as-metaphor poem tracing a year of secondary school derailed by the pandemic, and the quiet question of what comes after.",
      lines: [
        "The first year of senior secondary school",
        "felt like fall at the very beginning.",
        "In my short skirt uniform and knee-high socks,",
        "feeling sure of the path I had picked for myself,",
        "with my friends from previous years.",
        "I was hopeful and excited for the coming days.",
        "The first year of senior secondary school,",
        "I was at an all time high,",
        "until the global pandemic struck.",
        "At first, it was fun, right?",
        "No school, no work.",
        "Just endless free time to do what I wanted.",
        "Until the headlines,",
        "Until life continued.",
        "After multiple traumatic events,",
        "school resumed,",
        "grades plummeted.",
        "It felt harder to socialize.",
        "Until I wasn't so sure",
        "of the path I'd chosen anymore.",
        "Winter was here.",
        "It arrived and it sure was cold and harsh",
        "It felt like there would be no sign of another summer,",
        "no sign of another spring.",
        "I mean, summer came after what felt like an eternity,",
        "but what happened?",
        "What happened after the pandemic?"
      ]
    }
  ],
  fiction: {
    title: "Am I Delusional?",
    description: "A three-part short story following Mojola and Fola — tracing a crush from one-sided uncertainty to mutual reveal, closing with a shift into his point of view.",
    chapters: [
      {
        id: "part-1",
        title: "Am I Delusional? (Part 1)",
        subtitle: "Short fiction, Part 1 · February 2026",
        paragraphs: [
          "His eyes connected with hers from across the hall.",
          "It couldn't have been me he was staring at…right? she thought.",
          "She tuned back into the conversation with her mates, but she could have sworn she caught a hint of a small smile on his face.",
          "I'm overthinking this, Mojola told herself.",
          "After all, we are far apart. It was hard to tell.",
          "She found out later that day that his name was Fola… or Pelumi.",
          "She wasn't entirely sure.",
          "But there was this strange feeling,",
          "like he might be a little interested in her.",
          "Maybe it was all in her head.",
          "But why would he linger long enough to watch her greet his friend?",
          "Why did he look pleased at the sound of her name?",
          "Delusions or not,",
          "she was liking this a little too much."
        ]
      },
      {
        id: "part-2",
        title: "Am I Delusional? (Part 2)",
        subtitle: "Short fiction, Part 2 · February 2026",
        paragraphs: [
          "His Instagram page had been stalked three days prior, thank goodness for mutuals on social media.",
          "Did he somehow find out she stalked him? She had been careful not to like any posts.",
          "His page carried a calm, collected aesthetic. He wasn't loud.",
          "She liked that.",
          "Fola was quite different from her usual spec. From afar, he seemed level-headed and responsible. Maybe it was the friends he kept, but he gave off that energy.",
          "And of course… his biceps.",
          "She usually didn't care for biceps, but his suited him far too well.",
          "At first, it was just a measly crush — nothing serious.",
          "But now it felt like it was blooming into something bigger.",
          "It was past 5 p.m., and here she was, completely immersed in daydreams about him.",
          "She didn't like that.",
          "Not one bit.",
          "I should get food, she thought.",
          "She got up and threw on a plain, short wine-coloured a-line gown, little to no jewellery, no lip combo, and just a smear of Blue Seal Vaseline.",
          "She liked to look good at all times, but this felt like a test. Proof that she wasn't into him. That he wasn't altering her senses.",
          "No big deal.",
          "A few minutes into her walk to the café, she regretted everything.",
          "She felt bare.",
          "What exactly was she trying to prove again?",
          "And of course, the first person she saw standing outside the café was Fola, in all his handsome, muscular glory. It felt like a sick joke, poorly executed by the universe.",
          "Mojola briefly considered turning back, but that would look strange.",
          "So she kept walking.",
          "As if that wasn't enough, he turned and caught her gaze.",
          "She tried to maintain eye contact, but she could already feel the tips of her ears growing hot.",
          "Her body was such a traitor.",
          "It's like a magnet is always pulling his eyes towards me, she thought.",
          "She broke eye contact and pretended not to notice his stare.",
          "Maybe he just had a staring problem.",
          "She preferred that explanation to the possibility that he might actually like her. She couldn't afford to fall deeper into her delusions.",
          "But before she could walk past him completely, he smiled gently.",
          "“Hi, Mojola.”"
        ]
      },
      {
        id: "part-3",
        title: "Am I Delusional? (Part 3)",
        subtitle: "Short fiction, Part 3 · March 2026",
        intro: "The reveal: Mojola learns he already knows her name — and the story closes by handing the lens to Fola.",
        paragraphs: [
          "He knows my name? Mojola thought.",
          "She could feel her ears growing hotter by the minute. She paused in her tracks and looked up at him. He wasn't wearing his glasses like he usually did. Maybe he couldn't see clearly who he was talking to… but he had mentioned her name. Surely that couldn't have been a coincidence.",
          "“Hi… Fola,” she managed.",
          "She had considered pretending not to know his name, but that scenario didn't seem like it would play out in her favour.",
          "He looked surprised. “I'm surprised you know my name. But then again, we have a mutual friend.”",
          "He had that same small smile he always seemed to wear. He really was handsome — sculpted jaw, slightly pointed nose, clear skin, a faint mustache. And he smelled fresh. Like what she imagined clean water would smell like if it had a scent. He had that quiet, clean-guy aesthetic going on for him.",
          "She was surprised her legs hadn't given up on her yet, considering how hot she felt while indiscreetly ogling his face. Finally, she summoned the courage to look him in the eye instead of at the middle of his face.",
          "Of course, he had beautiful eyes. Chestnut brown, like endless dunes of sand in a desert. There was no mischievous glint in them, just sincerity. It made her fall a little deeper.",
          "“I'll just be upfront,” Fola said. “I actually asked my friend about you. I'd been noticing you and wanted to know more. I'm really glad I got to see you today.”",
          "Mojola was stunned by his sincerity. It wasn't often someone their age was so straightforward about their feelings.",
          "“Oh… that's nice.” She didn't know what else to say and immediately felt like an awkward teenager. “I've been noticing you too,” she added, a little shyly.",
          "“Could I get your number? I know this might be unexpected or uncomfortable for you.”",
          "Oh and he's considerate too. He was ticking her boxes.",
          "Maybe it wasn't delusions after all, Mojola thought, almost giddy.",
          "Calm yourself, Mojola. He didn't ask you out.",
          "She really liked him, but she wasn't about to lose her head entirely — or at least what was left of it.",
          "They exchanged numbers, and Fola bid her goodbye with his signature smile.",
          "She tried to compose herself, but she could feel her lips stretching into a wide grin."
        ]
      },
      {
        id: "fola-pov",
        title: "Fola's POV",
        paragraphs: [
          "He had been noticing her for quite a while now.",
          "He knew he was in too deep when he started looking out for a certain short, pretty, light-skinned lady with honey-coloured almond eyes, a slightly flat nose, and cupid-shaped lips. Even from afar, he could single her out among a sea of people.",
          "She stood out to him.",
          "Maybe it was her kind eyes.",
          "Maybe it was her animated hand movements when she spoke passionately.",
          "Maybe it was the way she threw her head back and guffawed, happy tears sometimes streaming down her face.",
          "She seemed authentic. Like she lived by her truth and her principles. He couldn't quite place why he was so drawn to her, he just was.",
          "It would be a lie to say she didn't cloud his thoughts daily. Not in an obsessive way. He was genuinely interested in being her friend, not as an underhanded way of dating her, but as a deep-seated desire.",
          "Everything about her intrigued him.",
          "He wanted to know her thoughts. What annoyed her. What made her laugh uncontrollably. What she lived for so passionately.",
          "Mojola was someone he craved true intimacy with."
        ]
      }
    ]
  }
};
