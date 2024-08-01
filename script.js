let questions = null;
document.addEventListener('DOMContentLoaded', (event) => {
    questions = [
        { text: "I prefer to spend time alone or with others.", left: "Alone", right: "With others", key: "q1", dimension: 'introversion_extroversion' },
        { text: "I feel more energized by spending time by myself or by being around other people.", left: "By myself", right: "Around other people", key: "q2", dimension: 'introversion_extroversion' },
        { text: "I tend to reflect deeply on my thoughts or seek external stimulation.", left: "Reflect deeply", right: "Seek stimulation", key: "q3", dimension: 'introversion_extroversion' },
        { text: "I find social interactions draining or invigorating.", left: "Draining", right: "Invigorating", key: "q4", dimension: 'introversion_extroversion' },
        { text: "I prefer quiet, solitary environments or lively, social environments.", left: "Solitary environments", right: "Social environments", key: "q5", dimension: 'introversion_extroversion' },
        { text: "I usually prefer a few close friends or a wide circle of acquaintances.", left: "Few close friends", right: "Wide circle", key: "q6", dimension: 'introversion_extroversion' },
        { text: "I am more comfortable with introspection or engaging with others.", left: "Introspection", right: "Engaging with others", key: "q7", dimension: 'introversion_extroversion' },
        { text: "I enjoy time spent in solitary activities or group activities.", left: "Solitary activities", right: "Group activities", key: "q8", dimension: 'introversion_extroversion' },
        { text: "I often keep my thoughts to myself or share my thoughts freely with others.", left: "Keep to myself", right: "Share freely", key: "q9", dimension: 'introversion_extroversion' },
        { text: "I recharge by spending time alone or by interacting with others.", left: "Spending time alone", right: "Interacting with others", key: "q10", dimension: 'introversion_extroversion' },
        { text: "I find it easy to start conversations or prefer others to initiate.", left: "Prefer others to initiate", right: "Find it easy to start conversations", key: "q11", dimension: 'introversion_extroversion' },
        { text: "I am more energized by spending a weekend alone or by attending a social gathering.", left: "Spending a weekend alone", right: "Attending a social gathering", key: "q12", dimension: 'introversion_extroversion' },
        { text: "I am more inclined to be reserved in social settings or outgoing and talkative.", left: "Reserved", right: "Outgoing and talkative", key: "q13", dimension: 'introversion_extroversion' },
        { text: "I enjoy being the center of attention or prefer to stay in the background.", left: "Stay in the background", right: "Center of attention", key: "q14", dimension: 'introversion_extroversion' },
        { text: "I feel more comfortable expressing my thoughts in writing or speaking them out loud.", left: "Writing", right: "Speaking out loud", key: "q15", dimension: 'introversion_extroversion' },
        { text: "I trust experience more than hunches or I trust hunches more than experience.", left: "Experience", right: "Hunches", key: "q16", dimension: 'sensing_intuition' },
        { text: "I make decisions based on logic and consistency or I make decisions based on people and special circumstances.", left: "Logic and consistency", right: "People and circumstances", key: "q17", dimension: 'thinking_feeling' },
        { text: "I prioritize efficiency and effectiveness in my work or I prioritize harmony and positive interactions.", left: "Efficiency and effectiveness", right: "Harmony and positive interactions", key: "q18", dimension: 'thinking_feeling' },
        { text: "I prefer to make decisions based on objective criteria or on the impact they will have on others.", left: "Objective criteria", right: "Impact on others", key: "q19", dimension: 'thinking_feeling' },
        { text: "I feel more comfortable giving direct and critical feedback or giving supportive and encouraging feedback.", left: "Direct and critical feedback", right: "Supportive and encouraging feedback", key: "q20", dimension: 'thinking_feeling' },
        { text: "I tend to focus on tasks and goals or on relationships and people.", left: "Tasks and goals", right: "Relationships and people", key: "q21", dimension: 'thinking_feeling' },
        { text: "I value logical analysis over emotional considerations or emotional considerations over logical analysis.", left: "Logical analysis", right: "Emotional considerations", key: "q22", dimension: 'thinking_feeling' },
        { text: "I am more likely to confront issues directly or to seek consensus and avoid conflict.", left: "Confront issues directly", right: "Seek consensus", key: "q23", dimension: 'thinking_feeling' },
        { text: "I believe in setting clear rules and expectations or in being flexible and accommodating.", left: "Clear rules and expectations", right: "Flexible and accommodating", key: "q24", dimension: 'thinking_feeling' },
        { text: "I often analyze things based on principles and theories or on how they align with my personal values.", left: "Principles and theories", right: "Personal values", key: "q25", dimension: 'thinking_feeling' },
        { text: "I prefer to understand systems and structures or understand the motivations and feelings of others.", left: "Systems and structures", right: "Motivations and feelings", key: "q26", dimension: 'thinking_feeling' },
        { text: "I value internal consistency and logical coherence or authenticity and staying true to oneself.", left: "Internal consistency", right: "Authenticity", key: "q27", dimension: 'thinking_feeling' },
        { text: "I am more concerned with objective analysis or with personal integrity.", left: "Objective analysis", right: "Personal integrity", key: "q28", dimension: 'thinking_feeling' },
        { text: "I often make decisions by deeply understanding the logic of a situation or by considering my personal beliefs.", left: "Understanding logic", right: "Personal beliefs", key: "q29", dimension: 'thinking_feeling' },
        { text: "I strive to be intellectually competent or true to my own values and ideals.", left: "Intellectually competent", right: "True to values", key: "q30", dimension: 'thinking_feeling' },
        { text: "I prefer to work on tasks that require critical thinking or that align with my personal passions.", left: "Critical thinking", right: "Personal passions", key: "q31", dimension: 'thinking_feeling' },
        { text: "I focus on understanding the deeper meaning of events or on recalling specific details and facts.", left: "Deeper meaning", right: "Specific details", key: "q32", dimension: 'sensing_intuition' },
        { text: "I rely more on my insights and future possibilities or on my past experiences and memories.", left: "Insights and possibilities", right: "Experiences and memories", key: "q33", dimension: 'sensing_intuition' },
        { text: "I prefer to think about the long-term implications of my actions or about the practical steps needed now.", left: "Long-term implications", right: "Practical steps", key: "q34", dimension: 'sensing_intuition' },
        { text: "I am more interested in conceptual frameworks or in tangible realities.", left: "Conceptual frameworks", right: "Tangible realities", key: "q35", dimension: 'sensing_intuition' },
        { text: "I often imagine potential future scenarios or recall detailed past events.", left: "Future scenarios", right: "Past events", key: "q36", dimension: 'sensing_intuition' },
        { text: "I am driven by my vision for the future or by my knowledge of what has worked before.", left: "Vision for the future", right: "What has worked before", key: "q37", dimension: 'sensing_intuition' },
        { text: "I seek to understand the underlying patterns in situations or to maintain consistency with established facts.", left: "Underlying patterns", right: "Established facts", key: "q38", dimension: 'sensing_intuition' },
        { text: "I am excited by exploring new ideas and possibilities or by engaging in new physical experiences.", left: "Ideas and possibilities", right: "Physical experiences", key: "q39", dimension: 'sensing_intuition' },
        { text: "I prefer brainstorming and generating multiple options or taking action in the present moment.", left: "Brainstorming options", right: "Taking action", key: "q40", dimension: 'sensing_intuition' },
        { text: "I enjoy theorizing about what could be or participating in real-world activities.", left: "Theorizing", right: "Real-world activities", key: "q41", dimension: 'sensing_intuition' },
        { text: "I focus on potential and what might happen or on immediate reality and what is happening now.", left: "Potential and future", right: "Immediate reality", key: "q42", dimension: 'sensing_intuition' },
        { text: "I like to engage in discussions about abstract concepts or in hands-on experiences.", left: "Abstract concepts", right: "Hands-on experiences", key: "q43", dimension: 'sensing_intuition' },
        { text: "I am driven by exploring theoretical possibilities or by enjoying the present moment.", left: "Theoretical possibilities", right: "Present moment", key: "q44", dimension: 'sensing_intuition' },
        { text: "I am more drawn to novelty and innovation or to action and excitement.", left: "Novelty and innovation", right: "Action and excitement", key: "q45", dimension: 'sensing_intuition' },
        { text: "I prefer to plan and organize my activities or to go with the flow.", left: "Plan and organize", right: "Go with the flow", key: "q46", dimension: 'perceiving_judging' },
        { text: "I feel more comfortable with a structured schedule or with an open-ended approach.", left: "Structured schedule", right: "Open-ended approach", key: "q47", dimension: 'perceiving_judging' },
        { text: "I like to make decisions early or to keep my options open.", left: "Make decisions early", right: "Keep options open", key: "q48", dimension: 'perceiving_judging' },
        { text: "I prefer to follow a clear set of rules or to be flexible with rules.", left: "Follow rules", right: "Be flexible with rules", key: "q49", dimension: 'perceiving_judging' },
        { text: "I am more comfortable when things are settled or when things are spontaneous.", left: "Things are settled", right: "Things are spontaneous", key: "q50", dimension: 'perceiving_judging' },
        { text: "I prefer to have detailed plans or to be open to changes.", left: "Detailed plans", right: "Open to changes", key: "q51", dimension: 'perceiving_judging' },
        { text: "I like to have a sense of control over my life or to adapt to new situations as they arise.", left: "Sense of control", right: "Adapt to new situations", key: "q52", dimension: 'perceiving_judging' },
        { text: "I find satisfaction in completing tasks or in starting new projects.", left: "Completing tasks", right: "Starting new projects", key: "q53", dimension: 'perceiving_judging' },
        { text: "I prefer to know what to expect or to be surprised.", left: "Know what to expect", right: "Be surprised", key: "q54", dimension: 'perceiving_judging' },
        { text: "I like to set goals and achieve them or to explore and discover.", left: "Set goals and achieve", right: "Explore and discover", key: "q55", dimension: 'perceiving_judging' },
        { text: "I prefer to finish one project before starting another or to have multiple projects going at once.", left: "Finish one project", right: "Multiple projects", key: "q56", dimension: 'perceiving_judging' },
        { text: "I am more comfortable with predictability or with flexibility.", left: "Predictability", right: "Flexibility", key: "q57", dimension: 'perceiving_judging' },
        { text: "I prefer to have a clear to-do list or to tackle tasks as they come.", left: "Clear to-do list", right: "Tackle tasks as they come", key: "q58", dimension: 'perceiving_judging' },
        { text: "I like to have a plan for everything or to be spontaneous and adaptable.", left: "Plan for everything", right: "Spontaneous and adaptable", key: "q59", dimension: 'perceiving_judging' },
        { text: "I feel more comfortable with closure or with keeping options open.", left: "Closure", right: "Keeping options open", key: "q60", dimension: 'perceiving_judging' }
        
    ];

// Shuffle the questions array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(questions);

// Generate HTML for questions
const form = document.getElementById('mbti-form');
questions.forEach((q, index) => {
    const questionHTML = `
        <div class="question">
            <label for="${q.key}">${index + 1}. ${q.text}</label>
            <input type="range" id="${q.key}" name="${q.key}" min="0" max="100" value="50">
            <div class="range-labels">
                <span>${q.left}</span>
                <span>${q.right}</span>
            </div>
        </div>
    `;
    form.innerHTML += questionHTML;
});
});

function calculateResults() {
    const form = document.getElementById('mbti-form');
    const formData = new FormData(form);

    let scores = {
        introversion_extroversion: 0,
        introversion_extroversion_total: 0,
        introversion_extroversion_n: 0,
        sensing_intuition: 0,
        sensing_intuition_total: 0,
        sensing_intuition_n: 0,
        thinking_feeling: 0,
        thinking_feeling_n: 0,
        thinking_feeling_total: 0,
        perceiving_judging: 0,
        perceiving_judging_n: 0,
        perceiving_judging_total: 0
    };

    formData.forEach((value, key) => {
        const question = questions.find(q => q.key === key);
        scores[`${question.dimension}_total`] += parseFloat(value);
        scores[`${question.dimension}_n`]++;
        scores[`${question.dimension}_total`]
    });

    for (const dimension of ['introversion_extroversion', 'sensing_intuition', 'thinking_feeling', 'perceiving_judging']) {
        scores[dimension] = scores[`${dimension}_total`] / scores[`${dimension}_n`];
    }

    // Debugging output
    console.log('Scores object:', scores);

    const dimensions = [
        { name: 'Introversion', score: scores.introversion_extroversion, opposite: 'Extraversion' },
        { name: 'Sensing', score: scores.sensing_intuition, opposite: 'Intuition' },
        { name: 'Thinking', score: scores.thinking_feeling, opposite: 'Feeling' },
        { name: 'Judging', score: scores.perceiving_judging, opposite: 'Perceiving' }
    ];

    // Determine the MBTI type
    const mbtiType = (scores.introversion_extroversion > 50 ? 'E' : 'I') +
                     (scores.sensing_intuition > 50 ? 'S' : 'N') +
                     (scores.thinking_feeling > 50 ? 'F' : 'T') +
                     (scores.perceiving_judging > 50 ? 'P' : 'J');

    let resultHTML = '<h2>Your Results</h2>';

    dimensions.forEach(dimension => {
        const percentage = dimension.score;
        resultHTML += `
            <div class="result-bar">
                <div class="result-labels">
                    <span>${dimension.name}</span>
                    <span>${dimension.opposite}</span>
                </div>
                <div class="slider-container">
                    <div class="slider" style="left: ${percentage}%;"></div>
                </div>
            </div>
        `;
    });

    resultHTML += `<h3>Your MBTI Type: ${mbtiType}</h3>`;
    document.getElementById('results').innerHTML = resultHTML;
}
