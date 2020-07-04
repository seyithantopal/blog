import React, { useState, createContext } from 'react';

export const PostContext = createContext();

export const PostProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'Life is a game. This is your strategy guide',
			content:
				'You might not realise, but real life is a game of strategy. There are some fun mini-games – like dancing, driving, running, and sex – but the key to winning is simply managing your resources. Most importantly, successful players put their time into the right things. Later in the game money comes into play, but your top priority should always be mastering where your time goes.',
			category: 'Technology',
			image: 'images.jpg',
			rank: 4,
			author: 'John Doe',
			date: '2020-05-10',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 2,
			title: 'How to Be a Hustler',
			content:
				'If you are a small business owner, do you imagine what your competition is willing to do to win market share? To launch their next product? I’ve imagined the owners of competing companies in extreme detail. Khaki shorts and t-shirt, beer in hand, half-bored with some friends on a Sunday watching a concert in the park.',
			category: 'Science',
			image: 'images.jpg',
			rank: 4,
			author: 'John Doe',
			date: '2020-05-08',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 3,
			title: 'The Subtle Art of Not Giving a Fuck',
			content:
				'People often say the key to confidence and success in life is to simply “not give a fuck.” Indeed, we often refer to the strongest, most admirable people we know in terms of their lack of fucks given. Like “Oh, look at Susie working weekends again, she doesn’t give a fuck.” Or “Did you hear that Tom called the company president an asshole and still got a raise anyway? Holy shit, that dude does not give a fuck.” Or “Jason got up and ended his date with Cindy after 20 minutes. He said he wasn’t going to listen to her bullshit anymore. Man, that guy does not give a fuck.”',
			category: 'Event',
			image: 'images.jpg',
			rank: 3,
			author: 'John Doe',
			date: '2020-05-09',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 4,
			title: 'The Zen Dilemma',
			content:
				'I started meditating when I was 16. I got very into it and read a lot about spirituality and eastern philosophy in high school and college. I rarely talk or write about spiritual practices because I honestly believe that spiritual experiences are, by definition, unquantifiable and therefore exceedingly difficult to put into words. They’re also exceedingly personal. So I just rarely even bother going there.',
			category: 'News',
			image: 'images.jpg',
			rank: 2,
			author: 'John Doe',
			date: '2020-05-05',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 5,
			title: 'How to Fund Your Freedom',
			content:
				'Having a marketable skill greatly improves your chances of making more money. It’s what helps you shift from someone else determining your worth to you setting your own price. My first skill was to teach myself how to build websites. Every night, from 12 – 4 AM, I studied web design after working two jobs. My middle name is Hustle. On top of that, I went to grad school to learn about a new field called Instructional Design. Turns out it was a good move. While companies were firing training departments, they were hiring Instructional Designers left and right. By the time I moved to Chicago, I had so many design skills that I was turning down high paying contract offers.',
			category: 'Technology',
			image: 'images.jpg',
			rank: 4,
			author: 'John Doe',
			date: '2020-03-05',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 6,
			title: 'Love Work',
			content:
				"To fall in love with hard work, you must understand why it's necessary. When I was young I was told that sugar was bad, but I never understood exactly why it was bad, so I kept eating it. Only when I learned how it chemically affected my body did I finally give it up. The same is true of work-- if you don't know why you have to work hard and love it, you'll probably never actually do it.",
			category: 'Media',
			image: 'images.jpg',
			rank: 1,
			author: 'John Doe',
			date: '2020-04-04',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
		{
			id: 7,
			title: 'Finding Peace with Uncertainty',
			content:
				'Fear of an uncertain future: it can stop us from doing great things, and it can keep us holding onto things that are hurting us. For example: you might be holding onto clutter for reasons of comfort and security, even if the clutter gives you anxiety and costs a lot of money. And: you might be staying in a job you don’t like, because you’re afraid of taking the plunge, because you’re afraid of failing. And again: you might not travel to a country that feels very unfamiliar because you don’t know what will happen — and miss out on an amazing life-changing experience. This is just the start of how fear of an uncertain future affects our lives. A reader recently asked “how to be at peace with uncertainty, how to let go of fear of the future.” It’s a great question, because we all deal with this fear. All of us.',
			category: 'Technology',
			image: 'images.jpg',
			rank: 4,
			author: 'John Doe',
			date: '2020-05-01',
			tags: ['Technology', 'Science', 'Creative', 'Event'],
		},
	]);

	return (
		<PostContext.Provider value={[posts, setPosts]}>
			{props.children}
		</PostContext.Provider>
	);
};
