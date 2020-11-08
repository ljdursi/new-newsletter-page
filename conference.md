---
layout: page
customized: true
title: Conference
bgColor: "#108AD2"
bgImg: "/assets/images/pages/decisionmakers.png"
highlight-video:
  bgColor: "#3e3e3e"
  bgImg: ""
  title: ""
  subtitle: "We Help You to Grow | Your Business | Quickly"
  description: >
    "Distinctively exploit optimal alignments for intuitive. Quickly 
    coordinate business applications through revolutionary cataly 
    technologies rather than development optimal alignments for intuitive."
  thumbnail: "/assets/images/speech.jpg"
  video: "https://player.vimeo.com/video/464624326"
---

{% capture content1 %}

# Lacus Helicona fortuna

## Ad non

Lorem markdownum quod glacies labor. Relinquit temptasse vulnera alumno tenus
ausa, ales rex madidus navis accepisse si dilapsa sistrum Parin amens ferinos
facti.

> Per cruor intima Eurypylusque **oscula** voces. Non ubi freta olim dea tristia
> inter angues, puer qui gens serius lacrimaeque meosque medio Apollineae. Data
> discutit, in tela quo _supplex huius vis_! Cornaque flatuque fine,
> exprobravit, est, subtraheret quoque!

_Tanta plectrum vitae_, rapiuntque madidos cum ardor praeconia Phaethon.
[Concidit ut velat](http://labori.net/et.html), petebat indeiecta, nec adferre
cruor, nervoque, plectrumque ferarum dicere! Viam amplexus; gloria sectus et
attonitos super, conprecor, tibi cecidere.
{% endcapture %}

{% capture content2 %}

## Flamina effudit ut caret fontibus

Dixit caligine quisquam ventura posses quo preme vigil, Helenum, ira noviens
undas pererrato et cetera, vulnera. Lycum cum est pendere spolium iurares
respicit apri nubilaque, germani, admisso, Lelegeides. Retexit clamatque forte
dixit in sit perpetuo Styx, rapuere, oculos fui. Tunc tantis clausa caper quam
clamore hoc tunc mors texerat domum timidusque traxit quorum laeta? Decorem
postquam facias si fumis!

Illo sensisse litore ministrat feta deprendit, est est sertaque rauco! Manu
**nomine sedulitas** paelex curvum; Iacchus instat passi praesignis. Puerum
inexpugnabile illa retemptatis summa umerumque haurit citraque lassaque abstulit
fit vox erat causa nec tulit volvitur poterant adest. Qui Belides me Ulixe,
pignora est fas ausum fluit!

Ambit et _siqua lupus_ pedibus! Noviens regis quod concutit sidera laudis hoc
Saturnia alii.

> Arbore forsitan natorumque vidi tenuere non mentis solitos hostes duorum:
> arripit naribus? Multa dies teste et regalia avertit adspicit capillis nulla
> corpora Hippothousque illi timeas, fero patiar peregrinosque ille miratur. In
> mihi turbant querno et ramis taedae, requiemque orba.

Quid monilia muneris captat domos mulcebunt manus. Nec arma est protinus captis
se hanc quoque terras Acoetes munire?

{% endcapture %}

{% capture blocks %}

## [Help, I’m a Research Computing Manager!](https://www.researchcomputingteams.org/SORSE/)

Here is a video recording of my [SORSE talk](https://sorse.github.io/programme/talks/event-005) from October 2020:

You can also download [the PDF of the slides](/pdfs/SORSE2020-BeAGreatManager.pdf).

----{break}----

## Resources and next steps

My suggestion would be to start with one-on-ones. Here is a quickstart guide ([PDF](/pdfs/howto-one-on-ones.pdf), [epub](/pdfs/howto-one-on-ones.epub)) to getting starting with one-on-ones. It lists out daily steps and resources to get one-on-ones up and running over the course of a month.

Other resources presesnted in the talk are below -

----{break}----

### Specific feedback

- [Manager-Tools basics podcasts](https://manager-tools.com/manager-tools-basics)
- re:Work @ Google’s [Situation-Behaviour-Impact model](https://docs.google.com/presentation/d/13-rj7ZqlyuHNli9Ybd5D8g-qqUNtG81t3JLq7JV5c2o/edit#slide=id.gbb7b556ba_0_179)
- Don’t use “sandwich” feedback, [it doesn’t work](http://aabri.com/manuscripts/141831.pdf)
- Software developers [feel more productive](https://research.google/pubs/pub47853/) when they’re getting useful feedback about job performance

----{break}----

### Delegation

- [Manager-Tools basics podcasts](https://manager-tools.com/manager-tools-basics)
- [Manager-Tools Responsibility Ladder podcasts](https://manager-tools.com/2017/02/teaching-decision-making-responsibility-ladder-part-1)
- [An Engineering Team where Everyone is a Leader](https://blog.pragmaticengineer.com/a-team-where-everyone-is-a-leader/) - Gergely Orosz

----{break}----

### Growing into your role

- [re:Work new manager training guide](https://rework.withgoogle.com/guides/managers-develop-and-support-managers/steps/review-googles-new-manager-training/)
- [The Manager’s Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/): Camille Fournier
- [Lab Dynamics](https://www.cshlpress.com/default.tpl?action=full&--eqskudatarq=1232&typ=sbt): Cohen & Cohen
- [Rands (tech) leadership slack](https://randsinrepose.com/welcome-to-rands-leadership-slack/)
- I have a [weekly link roundup newsletter](https://newsletter.researchcomputingteams.org) on the topic of managing research computing teams.

{% endcapture %}

{% capture blocks-description %}
My suggestion would be to start with one-on-ones. Here is a quickstart guide ([PDF](http://127.0.0.1:4000/pdfs/howto-one-on-ones.pdf), [epub](http://127.0.0.1:4000/pdfs/howto-one-on-ones.epub)) to getting starting with one-on-ones. It lists out daily steps and resources to get one-on-ones up and running over the course of a month.
{% endcapture %}

<!-- End Content -->

<!-- Layout -->

{% include light-section.html content=content1 %}
{% include highlight-video.html
  props=page.highlight-video
%}
{% include dark-section.html content=content2 %}
{% include blocks.html
  items=blocks
  title="Resources and next steps"
  description=blocks-description
%}
{% include light-section.html content=content1 class="pt-0" %}

<!-- End Layout -->
