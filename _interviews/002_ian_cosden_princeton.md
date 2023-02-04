---
layout: podcast
title: Ian Cosden, Princeton University
date: 2023-01-09
hero-img: /interviews/002/ian_cosden_princeton.jpg
subtitle: "Cosden describes how he grew a team of 17 people from nothing; the importance of researcher testimonials; making space for knowledge sharing and team communication; and how he advocated for and developed a career ladder."
---

<!-- markdownlint-disable MD033 -->

<img align="right" width="20%" src='{{ "/interviews/002/ian_cosden_princeton.jpg" | absolute_url }}' alt="Picture of Ian Cosden">

## RCT Interview: Director, Research Software Engineering for Computational & Data Science at Princeton University

In this interview, Ian Cosden and I talk about how he grew a team of 17 people from nothing; the importance of researcher testimonials; making space for knowledge sharing and team communication; and how he advocated for and developed a career ladder.

Some key takeaways for me:

Establishing clear expectations with everyone how hiring an RSE works:

> So there's a proposal process to become a partner and upfront we have some of these documentation to start, but we've since settled on a plan where we have a letter of intent. So a research group, consortium, research department say, "Hey, I'm interested in an RSE as part of your group. And that's about the extent of it."
So they're going into it knowing what they're signing up for, what it isn't. Some things we've had to say, "Look, this is not a postdoc. This is not a grad student. This is a professional. These are some of the things you can expect from a professional. These are some of the things you cannot expect from a professional."

The importance of qualitative researcher testimonials:

> The number one most successful way that we have gotten support from our central administration is from researcher faculty testimonials. So it would be that we say, &quot;Hey, that's great. Can you go tell our Dean for research, the Provost and say this is valuable to your research&quot;. And that at Princeton, at least that is the way that they say, &quot;Oh, we've heard this now three different places from three different people. there must be something here. Let's explore it at some more. &quot; In terms of expanding beyond HPC I will credit to our CIO who came up with a lot of the funding too, of saying, &quot;No, I'm not just supporting HPC. I want to have this be bigger and broader. So let's see what else is out there.&quot; [...] I would trying to come up with, you know, speedups, we've got a factor of 12 speed up and they can do this now, but in the end it's, &quot; This person has transformed the way we do research in the building.&quot; &mdash; those are what really drives interest and attention.

Making space for knowledge sharing and team communication within the RSE group:

> I felt very strongly in having team activities. Even though a lot of the cases they're kind of independent consultants and they're working on researcher projects and _that's_ their team. But we carved out time to make sure that the RSE group was interacting, was having team meetings, was helping each other. So setting up the Slack channels, creating a culture of it's okay to ask questions, it's okay not to know.  That helped everyone else grow as well, because we didn't have senior RSEs who've been here 20 years who could show 'em the ropes. So we had to sort build that as a cohort together.

And how he advocated for and developped a career ladder.

I really enjoyed the conversation, and I hope you do too!

<audio controls playsinline class="js-player" preload="none">
  <source src='{{ "/interviews/002/ian_cosden_princeton.mp3" | absolute_url }}' type="audio/mp3" />
</audio>

----------

[00:43] **Ian:** Hey, Jonathan. Thanks for having me. . So my name's Ian Cosden. I'm the director for research software engineering for computational and Data Science at Princeton University.

It's a bit of a mouthful. I lead a growing team of research software engineers in the central research computing department who work with domain scientists across the board from high energy physics, neuroscience to social sciences, and even digital humanities we've gotten involved in more recently.

[01:08] **Jonathan:** And you came to Princeton about 10 years ago, is that right? Was that to start this group or what were you hired to do?

[01:16] **Ian:** No I was hired, it was not called at the time, a research software engineer, but it was a research computing software programming analyst was my first title.

And I had actually gone through a couple of iterations of performance tuning and doing a lot of, I'd say HPC research software engineer. Floating between different projects. And then on the heels of some of that success was asked to start this group in late 2016. With a smaller scope.

Was supposed to be growing to a, roughly a team of five over a few years, and the demand has far outpaced that, and so we've grown much more quickly.

[01:53] **Jonathan:** Terrific.

What convinced people that what you were doing needed to be scaled up, that there needed to be a larger group?

[02:01] **Ian:** I would say there's a couple pieces to that.

The first is success, right? Nothing sort of breeds demand like a faculty member, a researcher saying, wow, this was really good. You should go try this. And so I, we started to get more interest. From successful projects. And then our CIO had heard some of these rumblings and said, Hey, let's try to build out a small team and see if we can support.

Actually at the time it was really focused on h HPC architectural trends, so it was, look, we as researchers can't keep up with the latest gpu, the latest cpu the. Xeon Phis that were coming out at the time, it was like, there's too much changing. We can't be an expert in our domain and the architecture and the software techniques to, you know, see the performance gains out of those.

So let's build the small team very quickly. It grew to more than HPC. It grew to kind of everything that touched software, including experimental data science you name it. So the initial pitch kind was essentially, Take advantage of this huge investment the university is making in hardware by hiring software people to work the code, to optimize the code, to take advantage of this very real clear investment.

Later it became, help us do all these things we don't know how to do on our own.

[03:24] **Jonathan:** Fantastic. That makes a lot of sense. As now as a newly minted leader of a group, you were growing around you, how did you, how did that work for you? How did you choose who the first few hires were?

[03:37] **Ian:** So we opted for an approach, which was around trying to find concrete partners on the academic side or on the research side, I should say who had a project or projects reasonably scoped so that we felt we could be successful bringing someone in to work on. So we, we didn't put out these, this call for who would want to partner with us on hiring a research software engineer. Found ones that we thought had a high likelihood of success and then went from there in, in terms of hiring individuals.

So we had an idea of the exact domains, we could hire someone with some background in that so that, you know, the language gap between researcher and software engineer was reduced. And, and that's been the pervasive model that we've grown with, which was hiring to specific domain backgrounds to, to meet the researchers where they are.

[04:34] **Jonathan:** Fantastic. It sounds like that initial structure of partnering with specific domains or departments and targeting posed problems and having people who can straddle both worlds. The computation with domain science, it sounds like that's persisted as the group's grown.

Is that right?

[04:55] **Ian:** Yeah, that's exactly right. It has. It has an added benefit, which I didn't mention. We tend to co-fund these positions. So we have 50% central funding and 50% come from this partner. And one of the successful things with that is it shows the central administration, we're not just giving it away for free.

The researchers want this, they're willing to put up a little bit of their money, but we can put a substantial portion of central funding. To make things go further, to provide a central team, a cohort a management structure to support these hires. So yes, we've stayed with that largely because it's been really successful at Princeton to say, look, the demand is there because they keep contributing money to this in some way.

It's been successful. After one year, two years, five years of an RSE in a specific domain, they become almost an expert in that domain and the software. And so now they become incredibly valuable and capable of doing things that, you know, even a raw software engineer wouldn't be able to do because they've built up this domain knowledge as well.

[05:59] **Jonathan:** Fantastic. Sounds like your RSEs grow significantly in their role, and that's not easy to do. How do you do support that as a manager? How do you make sure that they're building their skills?

[06:12] **Ian:** One, I think we set the expectations pretty early that if you want a job where you're just gonna do the same thing over again, this is wrong. This is not for you. You're gonna be learning every day. And that's part of it. I do find that the academic environment also sort of supports that. It's not, that's weird. You want to go learn that new thing like that.

That's sort of in the culture of academic research. So we set that expectation early. The second is we do set goals for even things that maybe aren't immediately obvious of how it's gonna impact a specific project. So maybe it's, &quot; Hey, I've been looking at Rust. I'm kind of interested in it. I'd like to learn a little bit more about it.&quot;

And so we sit down, we have a talk about sort of how we would go about doing that. Maybe. &quot;Okay. Why don't you go read about it for six months and come back and give the group a presentation on what you learned about Rust.&quot; So we bake in some of those more formal and the other is we do encourage that roughly 15% of their time should be on learning new things, working with colleagues on are maybe related, maybe not related.

It's okay because I think that just that gaining that breadth of knowledge is so valuable over time. If you can add a new tool to your toolbox every few months or years, it suddenly you have a pretty full toolbox and you never know when you need that one.

[07:32] **Jonathan:** That's fantastic. I talk about how research in some ways, gives us superpowers as managers, building teams like this. We have this expectation that people are learning and growing and that's something that managers and other sectors have to be taught and trained to encourage is fantastic. The matching model of, you know, 50/50 - this is fantastic. There's a lot of advantages there. How do you set expectations with the partner departments that some of you know, 15% of this RSEs time is going to be spent learning Rust for the next few months, and that's not going to help you in any obvious way right away.

[08:15] **Ian:** Yeah, so there's a lot to that.

So first is, this is where having that 50/50 funding makes it so easy because &quot; I haven't paid for the entire part of your time, so I'm still getting more than I paid for&quot;. So everybody's happy. The other is lots of meetings, communication. In general, communication's a good thing.

But at the onset, and we've matured to this point, we have some written documentation that we share with everyone before they're even consider doing it. We spell out these expectations on both sides. This is what's expected of a partner. This is what's expected of an RSE and part of that is this professional development so that they know what's happening.

Participating as part of the group, working with other, we do small sprints and hackathons and things of that nature that aren't maybe. Immediately applicable to one project. But they're learning in building a cohort and a peer network of RSEs that we make the cases important to have the central team we have as part of this.

So there's a proposal process to become a partner and upfront we have some of these documentation to start, but we've since settled on a plan where we have a letter of intent. So a research group, consortium, research department say, &quot;Hey, I'm interested in an RSE as part of your group&quot;. And that's about the extent of it.

We then either meet with them or it's gotten, these have gotten so big that we now have town halls where we lay out the structure, &quot;this is how you'll be evaluated. Ask us any questions. Here are expectations.&quot; kind of more formally state again, what we expect of this partnership. And then they write the proposal.

So they're going into it knowing what they're signing up for, what it isn't. Some things we've had to say, &quot;Look, this is not a postdoc. This is not a grad student. This is a professional. These are some of the things you can expect from a professional. These are some of the things you cannot expect from a professional.&quot;

And upfront, and having it documented in a place we can point people to has, I think really helped having to have those reactive conversations as opposed to, Setting expectation upfront.

[10:17] **Jonathan:** Fantastic. And you mentioned this maturing process. It sounds like at least some of this maturing process is really getting those expectations clear and documented upfront rather than waiting for there to be a misunderstanding

[10:33] **Ian:** A lot of the documentation has been stuff that I would just say in a meeting, I realize I'm saying the same thing over and over again because.

Early on, I did think it was very important to establish expectations on, lay things out, for, what's going to happen for a lot of researchers, if not almost all of them. This is the first time they'll work with an RSE in earnest, right? Maybe if earners has seen something else or had a really skilled postdoc in their lab for a little while, but this is the first experience they're gonna have on a project with an R s E.

So they're in they're sort of, they have some trepidations too, of like, how is this gonna work? So I was always up upfront with it. But now the formality is, it's written in a bit of legalese, right? It's written in a bit more precision. Save me a bit of work, but also have a place that's static on the website that we can always point people to and

[11:22] **Jonathan:** There's something about having a formal document, like you can say it three times in a meeting, but suddenly it has a power there that.

[11:32] **Ian:** That was probably a couple years into the group. With that, we're gonna need a bit more formality. Another of publishing guidelines, right? Who can publish when, how do we go about doing that?

We just spell that out now so there's no confusion or question.

[11:46] **Jonathan:** Makes sense. You probably don't want to document things too early either, because you're probably still figuring things out the first couple years. How long would you say it took you? Really have in your own mind a fairly clear understanding of how this was gonna work?

[12:02] **Ian:** That's a good question. I would guess somewhere in the two to three years after kind of inception, which was really a blank slate, there was, it wasn't picking something up. There was really nothing here. Mistakes were made, lessons were learned. Things worked really well and we're gonna keep doing that.

Having seen this growth too, it also enabled me to say, all right, this really is working. So I feel more confident in formalizing it because I've had a few successes and I feel okay we can say that we've got it now.

[12:30] **Jonathan:** Cool - two-ish years, roughly speaking, how many projects would that have been that you would've seen?

[12:37] **Ian:** Projects are a harder question to answer because I have some RSEs who are working on one project for many years and some who probably have three at any given time and cycle through every six to nine months. So let's say - that was on the order of a dozen projects at that point we'd touched cause we were still growing too, but between 12 and 20.

[13:00] **Jonathan:** So more than enough to start being able to have some conclusions about what was working

[13:05] **Ian:** Yeah, and I think the conclusions had been drawn and I think had I gone through the exercise of writing it down, I would've realized I had it in my head before (laughs) I ended up doing it.

[13:15] **Jonathan:** So it sounds like the scope has grown, if you're having town halls to communicate, to inform people proposing new RSEs.

You've obviously grown a long way from five people focused on HPC architecture. . How did you make the case to your administration that this was successful, but there was even more demand out there that needed to be met.

[13:42] **Ian:** The number one most successful way that we have gotten support from our central administration is from researcher faculty testimonials. So it would be that we say, &quot;Hey, that's great. Can you go tell our Dean for research, the Provost and say this is valuable to your research&quot;. And that at Princeton, at least that is the way that they say, &quot;Oh, we've heard this now three different places from three different people. there must be something here. Let's explore it at some more. &quot; In terms of expanding beyond HPC I will credit to our CIO who came up with a lot of the funding too, of saying, &quot;No, I'm not just supporting HPC. I want to have this be bigger and broader. So let's see what else is out there.&quot;

And in our most recent, so this would've been about exactly a year ago when we did these town halls everywhere, the response from social sciences and digital humanities was, Both unexpected and really encouraging. Of they're definitely not HPC, or not yet. But the, when we were able to really get into the inboxes and have people pay attention in these other places, we're seeing the demand grow. So we're able to reach out more again, as we've gotten more publicity or more press on campus and internally, people are paying attention to RSEs and research software engineering and saying, oh, I could see how that could fit my work.

And it's not, it's definitely not just HPC anymore.

[15:09] **Jonathan:** So testimonials, We are typically trained in quantitative fields, so we sometimes underestimate the power of qualitative data. One good quote is ...

[15:22] **Ian:** You hit the nail on the head because I would trying to come up with, you know, speedups, we've got a factor of 12 speed up and they can do this now, but in the end it's, &quot; This person has transformed the way we do research in the building.&quot;

And those are what really drives interest and attention at least here. Yes.

[15:43] **Jonathan:** And do you ask the faculty members or researchers to talk to their deans or vp?

[15:50] **Ian:** I did. Yeah. I feel like everybody's gotten the memo and the message that it's a little less now. Every now and then, I'll ask for a quote or go back if they could do it, but yes, certainly. I say thank you. Can you whisper this in ear&quot;? Cause they're the ones who need to hear that this investment is working.

[16:08] **Jonathan:** Fantastic. That's great. And obviously this has worked, you're a long way from five RSEs that you started with, are you at 19 now?

[16:17] **Ian:** So we're at 17 right now. as of today and we have a crazy thing, we have 11 vacancies right now. So in September we hired two associate directors because we knew we had all this fun. We knew we were having these vacant, so we got a lot of central funding to expand out the group last year. We're reaching a new phase of the need to build out a management structure that can help with this. People come and go. It's inevitable . But hiring 11 people was something that is a big undertaking on its own. So we have a plan. We've got three or four open right now.

And we're gonna slowly roll 'em out over, over time. So, yeah, long way from five. &quot; Build a team of five, Ian&quot;, that's what they said. &quot; Grow it slowly over a few years. &quot;

[17:05] **Jonathan:** Wow. Okay. So lots of questions come to mind. From five to 17, that's a lot of growth in a relatively modest number of years, how did you personally, as a manager, handle this growth and handle this, this growing number of team members?

[17:25] **Ian:** Yeah, so some things were easy, some things were hard. I think one, I was in a huge advantage of being able to, hire everyone. Right? And so we were new. It was almost more like a startup. There was an energy, there was an excitement about it. There was a, we're building the airplane as we're flying it. So everyone understood that and were willing to handle growing pains.

I felt very strongly in having team activities. Even though a lot of the cases they're kind of independent consultants and they're working on researcher projects and _that's_ their team. But we carved out time to make sure that the RSE group was interacting, was having team meetings, was helping each other. So setting up the Slack channels, creating a culture of it's okay to ask questions, it's okay not to know.

Because that helped everyone else. Grow as well, because we didn't have senior RSEs who've been here 20 years who could show x 'em the ropes. So we had to sort build that as a cohort together. There were challenges - I went from having lots of time to do one-on-ones to, I had less time to do one-on-ones, and I had to get very efficient and smart about how to do that.

I know I've read your stuff. Proponent of one-on-ones, and I am too. And I they're the last things I'll cut, but they take time and consistency.

[18:43] **Jonathan:** Yeah. Absolutely. So you mentioned giving talks to each other, you mentioned Slack channels.

Are there any things you've found that have been particularly helpful or things that did not work for first promoting the idea that they are a team, but also promoting information exchange.

[19:01] **Ian:** I will say may maybe as a point to this, we struggled when the pandemic first hit.

Because so much what I discovered was so much was, &quot; I have a question, but I'm a little nervous to ask it. But when we have the meeting, I'll just ask the person I sit next to or on the way out,&quot; right? And the number of interactions dropped pretty quickly when we all went remote. And now you had to be a bit more intentional.

Now you actually had to reach out to someone or you had to ask broader meeting. So what we did there was started to have just occasional random pair ups in Zoom and you just have to go talk to somebody and hey, lo and behold, we start talking about, &quot;I didn't know you were doing this.&quot;

And it sort of forced the the chat. So I think to answer your question, having these group meetings in person when possible allows for the water cooler conversations, the small talk that builds the psychological comfort that I can ask people these questions and it's not putting myself out there.

Or you have to get inventive when you're a remote team. But I think it works just as a shift.

[20:12] **Jonathan:** Absolutely. You reminded me of something I haven't thought of in years. I was always- as a researcher, as a grad student, postdoc- I was always the computational expert.

My first time I was now staff giving a talk about something to other staff, other computational experts, I was _really_ nervous in a way I had not been before. This was different. Giving a talk on something, _daring_ to give a tutorial to other experts on some computational field, right? It was nervewracking. So yeah, doing anything you can to promote, to make it easier to overcome the potential barrier to asking questions.

[20:58] **Ian:** And funny you mention that, that is when we have group meetings, that is the expectation that now we're probably on a five to six month cycle. Everybody gives an in-depth talk about what it is they're working on. And everybody's nervous , but after literally every time they go, &quot;I'm so glad I did that&quot;, right, because it's forced them and they don't necessarily have a lot of opportunities to do that.

And it never ceases us to amaze me the discussion that's generated. I think no one's going to be actually be interested in this particular library somebody's talking about right now. Lo and behold, right there, there isand I don't think they would have done it on their own.

It's sort of something that I've put in as the expectation that you will do these on a regular basis and the two-way learning is just terrific to watch.

[21:42] **Jonathan:** Yeah, and once you've got the material captured in a talk, you can just re reuse that talk or bundle it up into smaller pieces. It's super, super valuable.

And presumably, these will be even more important as you hire another 11 people. So tell me about that. Yeah, that's an entire project that could occupy your entire next year, I imagine.

[22:07] **Ian:** We've gone through the process, so this has driven interest in the town halls.

Proposals are being reviewed we have criteria laid out of what's expected in these. Reviewed by a committee of faculty members who are very familiar with RSE work and how it's awarded. So we know the domains and the areas that they're gonna work in from particle physics to Shakespearean history and some really diverse things.

And as part of that process we rank ordered them and we're gonna, we're essentially going down the list of hiring each one, sort wanna keep it at four at a time. So that's two with each of the new associate directors. Because for everyone who's going through it, hiring is a beast of a problem.

And it's a major endeavor and you gotta get it right. Right. There's a lot riding on it, so you wanna do it well,

[23:05] **Jonathan:** It sounds like at this point you've got some common requirements probably that you need, there's domain specific knowledge, but what kinds of things are you looking for in an RSE?

[23:16] **Ian:** Oh, that's a good question.

I would say there's technical skills, there's some domain competency. There's - I would say it's almost understanding the research culture, incentives, workflow. Something that I think sometimes people struggle with if they haven't really been in the research world; why is this important and why are we doing it this way and why aren't we doing it that way?

And the need to be flexible and understand that ability to handle ambiguity. If we knew exactly where to go, it wouldn't be research, right? So there's an exploratory process that takes place.

And then a lot of soft skills. There's a lot of the need to interact with multiple different, very smart, capable people who might not be an expert in your particular field, but are an expert in something else. And being able to foster a collaboration, there's a degree of project management.

There's a lot of elements that I think go into an RSE. And my HR department says all the time I'm looking for a purple unicorn. And I don't think it's that crazy, but the reasons why I want to bring more notoriety and attention to the RSE space is because I think there are a lot of people who are interested in this kind of work, but don't necessarily know it's a thing.

So we need to do some more broader marketing to say, &quot;Hey, you like programming, you like software engineering and you enjoy the research component. We've got a job for you&quot;.

[24:39] **Jonathan:** And how has that relationship with HR gone? I know you've done a lot of work building new role types and career ladders.

[24:51] **Ian:** Yeah, so very recently we've had HR sign off on a multi-year plan. So as I mentioned, we've grown from very small. And so five years, six years ago we had research software engineer, and then a couple years later westarted asking, &quot; what happens after research software engineer?&quot; So we introduced senior research software engineer.

And then probably about two years ago we thought, &quot; what happens after that? Hold on. We're big enough now let's take a step back and say, what should a career trajectory, career level path look like at Princeton?&quot; So working with HR we came up with a multi-tier career ladder that they've only just very recently - so hot off the presses! - have agreed to, and said we can implement here.

So ranging from entry level associate research software engineer to a research software engineer one, research software engineer two that starts to get more independence , and into senior research software engineer. And then we introduced two levels above senior research software engineer of: lead research software engineer and principal research software engineer.

The idea being, to create a clear and transparent ladder for RSEs to stay here for a long time, that they can grow and take on more responsibility. And I should have mentioned that the lead and principle bifurcate into small team management and individual contributor, but still growing. So you don't have to- a common complaint in this field is &quot;I don't want to be a manager, right? But I want to keep growing my career.&quot; So we tried to make both of those paths possible.

[26:27] **Jonathan:** Very cool. And how did that work? This back and forth with HR. I've seen a lot of teams are nervous even talking to HR or have no idea how'd have productive conversations with them. How's this gone for you?

[26:45] **Ian:** So I will say step one was they had to understand that this was needed. So I don't think we could have done it sooner if that makes sense, that we had to have shown that we're growing, we had to have shown through this growth that this was a thing that they could no longer ignore and try to pigeonhole into something else.

We had to lose a few people. Because that makes a strong case of ... if there wasn't that career growth here, then we need to make it. Okay. That makes sense. So it was finding the right time.

So that was step one. And I felt like the time was about right. Then we had a _lot_ of back and forth.

What I discovered in this process was HR, it's not technical and we have a highly technical, highly specific role that is also vague, right? So a research software engineer that's working on, you know, an astrophysics HPC MPI code versus a research software engineer who's building an experimental system in neuroscience are both research software engineers, but in the end, really quite different.

So how did we distill down to the essence of a research software engineer that was pan domain. It didn't matter those specifics, but leave that gap. A lot of back and forth communicating this fact. So saying that there was a lot of high level language that spoke to competencies of independence, of scope, of collaborative ability, of ability to learn , of skill sets ability to gain those skill sets that didn't matter what the specifics were.

That then we could build out. So there was a lot of back and forth to get to a point where HR could say, okay, we see the distinguishing characteristics. I was comfortable with the fact that they did in fact map one to RSEs.

[28:31] **Jonathan:** You mentioned people leaving, and that was a something which resonated with HR.

Were there other particular things that helped you communicate your needs especially well to them?

[28:45] **Ian:** I would say that was even smaller than the growth that we were experiencing. So it was because of the growth, it started to be, Hey, research software engineers are a thing. Tell us more.

I think HR gets a lot of bad rap sometimes, but their goal is to support, you know, the human resources on campus. And so if there's this growing thing that they didn't really understand where it fits, that was the impetus for them to start having a conversation.

We had a lot of support. So we are housed largely, essentially in the IT department and having a large organization like that comes with some extra support to, you know, help through the process with HR and some advocates and who better understand the role, but also better understand HR who act as an intermediary for what each side kind of needs and wants.

I feel the need to say, That RIT, my home department, did help a lot in that process by, you know, helping both sides see, the other's point.

[29:46] **Jonathan:** This I guess is another benefit of a central group. Had the 17 individuals been scattered all over different units, there's no way HR would've recognized the need for some career ladder for them.

[30:02] **Ian:** Absolutely. And. I feel like I could say this to you. I hope this doesn't get quoted out of context. Like it also sort of justifies my own job, like it was a lot of work and without a manager to kind of advocate for this, it wouldn't have happened.

[30:16] **Jonathan:** No, absolutely. Those 17 individuals still would've needed managers to nurture their growth, support their growth, and to advocate for them they just wouldn't have had or not for that aspect of their careers.

RSEs are hired, they're hired for specific projects initially. How do future projects come in? How does that work?

[30:38] **Ian:** This is probably a longer answer than you were expecting. We have a couple different ways. So one is sometimes when we hire these RSEs, we hire them to an actual domain department, right? So we have a site, a project intake cycle, affiliated with that specific constituency.

So if it's with a department, it's everyone in that department. There's a formal way by which we take on projects. We we sunset projects, we take on new ones. On the ones that are long running, they're obviously doing this for a while. So in the case of maybe a third of the group have these project, so we'll do a call for projects.

We'll say, &quot;What projects do you have that you _think_ might be good for an RSE?&quot; We try to keep the barrier for application as low as possible. Go and meet them, &quot; what work have you done?&quot; We ask the questions that help us scope and determine feasibility and can we be successful? And is this interesting to the RSEs?

We might be able to do it and be fine, but if it's gonna drive them absolutely up the wall they're gonna leave. &quot;I don't wanna do that project&quot;.

So we'll go through these sort of regular calls. We'll go and meet with our kind of partner leadership and say, what are your strategic priorities within your department?

And, you know, are any of these projects, really important or really not important. And then, you know, we've of scoped it out. We think we can, an RSE can do two at 50%. Then set expectations again with this is for this long, we'll have check-ins at these sort of regular periods.

And then depending on how those go is when we start the cycle over of taking on new projects.

If it's at the sort of larger RSE one to one, if there's a project that's gonna need a full-time RSE indefinitely, that would be on these calls for partnership cycles, which happen less frequently, so every couple years until we can sort of catch up with the hiring and the demand and put out another one.

[32:40] **Jonathan:** Are there any resources that helped you learn this? This basically professional services firm mode of operating? Like the project intake. What we've just discussed could be any consultancy or large legal firm or something, but there's, there doesn't seem to be a lot of resources for helping people learn how to run these things.

[33:06] **Ian:** I wish I could tell you. No, I would say I learned a lot. So before I went back to do a PhD, I worked for a consulting company. For two years. A, I hated it so it taught me a lot about what I actually wanna do in life. But B there were a lot of these sort of project management type best practices.

Like there, there was a lot that I learned just from those couple years of how it was done. And so in light of not having something better to fall back on, used that and it's been, you know, we've tinkered with it over time as well. I don't think I could point you to specific, I'll follow this resource of how they get things and how they run it.

[33:47] **Jonathan:** No, it's, it's surprisingly, It's hard to find, but, yeah, that just spending a couple years somewhere else, almost any other kind of role, just saying, oh my heavens said there are different ways of operating. This is fascinating. Even if you decide you don't like that, it's very eye opening.

[34:06] **Ian:** Hindsight's 20/20, you know, ends justifies the means. I was miserable there, but I'm so glad I did it.

[34:11] **Jonathan:** Yeah, absolutely.

What's next for you and Princeton RSE once this... it's probably hard to even imagine at the moment, but once this next wave of expansion is successfully completed, what are things you would like Princeton, RSE to start thinking about next?

[34:30] **Ian:** A couple ideas. So one is I don't think we're done . RSEs are transformative. They are! They can do amazing things, but they don't scale real well. There's only so many projects an RSE can have a transformative impact on at a time. And it's a big campus. There's a lot of computational work, a lot of work that uses software that we're not hitting right now.

So I really don't think that this is the end. I think we're just gonna continue. So with that comes my next goal. I think we're reaching the point where this proof of concept model needs to mature into a more professional, sustainable thing with the career paths, it's going to help us build a pipeline.

It's going to help us hire entry level, it's going to help us create our own internal pipeline of RSEs that can evolve and move between things. I'd like to see more team in a central pool to support those that are out with the domain experience because so much does span domains, span projects.

We struggle now to share expertise. You know, if someone, RSE A has an expertise for project B, but they're fully committed, it's very hard for me to swap them. I think that's something we can evolve into doing that benefits everybody.

And I think maybe the last thing, this isn't really Princeton, RSE, but I'm just really excited to see the RSE profession in general grow to a point where we can go to conferences and present our work and kind of get recognized and awarded for that, you increasingly important part of the research process.

[36:08] **Jonathan:** Absolutely. That's great. That's fantastic. I can't wait to hear how it goes, not just this current wave of hiring, but these next steps.

Thanks for so much for this conversation. This was really great.

[36:20] **Ian:** Yeah, great. Thanks, Jonathan!
