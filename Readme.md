Markdown guide: https://www.markdownguide.org/basic-syntax/

### Naviagtion

The list of navbar items can be changed in the \_data/navigation.yml file where url is the route the link will lead to and name is the text displayed on the navbar. To lead to a different webpage just write its absolute url.

### Use includes with markdown

All includes are located in the \_includes folder. The following ones can be used on any page:

- blocks
- dark-section
- light-section
- highlight-video
- embed
- gmaps

The ones from the Homepage can be also reused:

- slider (top section)
- services (services section)
- features (features section)
- accordion (faq section)

#### Light and Dark section

(example of usage: managers.md, decision-makers.md, conference.md)

To be able to use markdown in multiple sections and to create a custom, better looking layout
it is necessary to embody the markdown in a variable using the capture tags:

```markdown
{% capture var_name %} ## Resources and next steps
Here is a quickstart guide ([PDF](/pdfs/howto-one-on-ones.pdf), [epub](/pdfs/howto-one-on-ones.epub)) to getting starting with one-on-ones.
{% endcapture %}

{% capture var_name2 %} ## Resources and next steps
Here is a quickstart guide ([PDF](/pdfs/howto-one-on-ones.pdf), [epub](/pdfs/howto-one-on-ones.epub)) to getting starting with one-on-ones.
{% endcapture %}
```

once the variable is captured, it can be passed into the section:

```markdown
{% include light-section.html content=var_name %}
{% include dark-section.html content=var_name2 %}
```

includes can be called as many times as needed with different or same parameters:

```markdown
{% include light-section.html content=var_name1 %}
{% include light-section.html content=var_name2 %}
{% include dark-section.html content=var_name1 %}
{% include dark-section.html content=var_name2 %}
```

sections accept a class parameter so a string spacing of utility classes can be passed to them like so:

```markdown
{% include light-section.html content=var_name1 class="pt-0 pdb-100" %}
```

This is handy when you are stacking different sections

#### Blocks

The blocks include accepts the following parameters:

- title: string
- items: markdown with a special separator between items "----{break}----"
- description: markdown

Like mentioned in the section above, for the description markdown to be used in an include, it needs to be captured like so:

```markdown
{% capture desc %}

###### Lorem ipsum formatted markdown text

{% endcapture %}
```

The same goes for the markdown which will become an array of items using the special separator:

```markdown
{% capture blocks %}

###### Lorem ipsum formatted markdown text

----{break}----

###### Lorem ipsum formatted markdown text

----{break}----

###### Lorem ipsum formatted markdown text

----{break}----

###### Lorem ipsum formatted markdown text

----{break}----

###### Lorem ipsum formatted markdown text

----{break}----

###### Lorem ipsum formatted markdown text

{% endcapture %}
```

Now the parameters can be passed to the blocks include:

```markdown
{% include blocks.html title="Any title" description=desc items=blocks %}
```

#### Gmaps

This include accepts an src parameter:

```markdown
{% include gmaps.html src="https://www.google.com/maps/embed/v1/MODE?key=YOUR_API_KEY&parameters" %}
```

#### Embed

Take the embed link from youtube or some other platform, not the video url in the browser.
It is usually obtained when via the share button by selecting the embed option.

This include accepts a link parameter:

```markdown
{% include embed.html link="https://www.youtube.com/embed/bS5P_LAqiVg" %}
```

#### Highlight Video

It takes parameters from the front-matter:

```yml
highlight-video:
  bgColor: "#3e3e3e"
  bgImg: "/path/to/image/file"
  title: "Any title"
  subtitle: "We Help You to Grow | Your Business | Quickly"
  description: >
    "Distinctively exploit optimal alignments for intuitive. Quickly
    coordinate business applications through revolutionary cataly
    technologies rather than development optimal alignments for intuitive."
  thumbnail: "/assets/images/speech.jpg"
  video: "https://player.vimeo.com/video/464624326"
```

Then you can use it within your markdown like so:

```markdown
{% include highligh-video.html props=page.highlight-video %}
```

#### Includes from the homepage

Just like highlight video, the includes on the homepage take respective parameters from the front matter.

```yml
slider:
  - title: Research Computing Teams <br>Newsletter
    description: The RCT Newsletter started in Jan 2020, and it covers <br>all aspects of managing research computing teams.
    background: /assets/images/slider/using-mac.jpg
  - title: A newesletter intended <br> for those
    description: interested in topics about <br> managing or designing R&D computing teams or efforts
    background: /assets/images/slider/group-at-desk.jpg
  - title: Get your questions <br> answered
    description: Follow up on the newsletter topics and <br> ask me directly what you would like to know
    background: /assets/images/slider/people-discussing-indoors.jpg

services:
  columns: 4
  title: Topics
  subtitle: Newsletter
  description: Feedback from subscribers will greatly shape the topics we cover. Likely early topics will be about the following&#58;
  items:
    - icon: meeting
      title: Hiring
      description: Hiring from outside research, writing job ads, onboarding, the responsibility ladder.
    - icon: management-1
      title: Managing
      description: One-on-Ones, giving feedback, coaching and training, distributed teams.
    - icon: meeting-1
      title: Managing upwards
      description: Building and sustaining support for projects, shepharding multi-institution collaborations, communications.
    - icon: target-1
      title: Career paths
      description: for our team members and ourselves.
    - icon: degree
      title: R&D computing and academic credit
      description: We always provide people a complete solution focused of any business.
    - icon: efficiency
      title: Automation and reproducibility
      description: We always provide people a complete solution focused of any business.
    - icon: graphic
      title: Lifecycle of development
      description: R&D Software planning and development throughout the lifecycle.
    - icon: benchmark
      title: Grants and Sustainability
      description: We always provide people a complete solution focused of any business.

features:
  title: The newsletter format
  description: A personal, and easy to follow approach
  items:
    - title: Roundups
      description: Weekly summaries of previously covered topics with occasional longer posts.
    - title: Educational material
      description: Occasional (no more than weekly) short emails with links
    - title: Direct messaging
      description: Reply to any message (it’ll go directly to me and only to me) with thoughts, comments, and feedback
  background: /assets/images/slider/person-typing.jpg

faq:
  background: img/bg/6.jpg
  subtitle: Frequently Asked Questions
  title: Have Any Questions?
  description: Distinctively exploit revolutionary catalysts for chang the Seamlessly optimal rather than just in web & apps development optimal alignments for intuitive.
  items:
    - question: So you are an expert on this stuff, right?
      answer: Absolutely not. I do have a lot of experience in this area from a lot of different perspectives, but more importantly I continue trying to learn and improve, and anyone interested is welcome to join as I write my way through that process..
    - question: Will the posts be archived anywhere?
      answer: That wasn’t originally the intention, but people seem to prefer it; the archives can currently be found here.
    - question: Will my email address get sold/used for anything else?
      answer: TNo. I’ll use it only for sending you my thoughts on R&D computing teams, and when you no longer care to continue hearing those thoughts, unsubscribe at any time, and I’ll remove the unsubscribed member’s information routinely. No one other than me and whatever tool I’m using at the time to send out the newsletter will ever have access to your email address.
    - question: How much tracking is being done in the emails?
      answer: None; I’ve turned off all tracking and analytics for the emails. That means the only way I find out if you’re reading them, liked what you read, and were interested in some parts more than others is when you email me to tell me! So please at any time just hit reply (the email will only go to me) and tell me your opinions about what you’ve read or what you’d like to see more of.
```

Then you can pass these objects to the includes:

```markdown
{% include slider.html items=page.slider %}
{% include features.html props=page.features %}
{% include services.html props=page.services %}
{% include faq.html props=page.faq %}
```

### Bootstrap utilities:

Markdown allows you to use html so bootstrap utility classes come in very handy for textual content where you don't need any formatting like simple headers/paragraphs

#### Text

For headers use h tags: h1,h2,h3,h4,h5,h6

```html
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>
<p class="text-justify">
  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
  fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter
  est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
  Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras
  mattis iudicium purus sit amet fermentum.
</p>
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

#### Spacing

For headers use h tags: h1,h2,h3,h4,h5,h6
You can add spacing to any line of text

##### Prefixes and their meaning:

- p: spacing all around
- px: spacing on the left and right
- py: spacing on top and bottom
- pt: top spacing
- pb: bottom spacing
- pl: left spacing
- pr: right spacing

##### Spacing size

After the prefix add a dash followed by a number from 1 to 5

```html
<div class="p-3">text here</div>
<div class="px-5">text here</div>
<div class="pl-1">text here</div>
```

You can add multiple classes at the same time

```html
<div class="pt-2 pb-3">text here</div>
<div class="py-3 px-5">text here</div>
<div class="px-5 pt-0 pb-5">text here</div>
```

#### Theme specific spacing

##### Prefixes and their meaning:

- pdt: top spacing
- pdb: bottom spacing
- pdl: left spacing
- pdr: right spacing

##### Spacing size

After the prefix add a dash followed by a number from 0 to 150 in steps of 5.

Can be used for light-section and dark-section include files as well

```html
<div class="pdt-100">text here</div>
```

You can add multiple classes at the same time and mix them with other utility classes from bootstrap

```html
<div class="pdb-0 pdt-100 px-0">text here</div>
```
