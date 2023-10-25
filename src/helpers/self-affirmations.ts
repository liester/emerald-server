import { DateTime } from 'luxon';

const selfAffirmations = [
    'I am worthy and deserving of love and happiness.',
    'I am capable and strong.',
    'I am confident in my abilities.',
    'I am successful in all areas of my life.',
    'I am constantly improving and growing as a person.',
    'I am unique and special, just as I am.',
    'I am worthy of respect and kindness from myself and others.',
    'I am capable of achieving my goals and dreams.',
    'I am a positive force in the world.',
    'I am grateful for all that I have and all that I am.',
    'I am worthy of a fulfilling and joyful life.',
    'I am strong enough to handle any challenges that come my way.',
    'I am a valuable and important member of society.',
    'I am deserving of love and affection.',
    'I am capable of creating the life that I want.',
    'I am worthy of a life filled with abundance and prosperity.',
    'I am capable of making a positive impact on those around me.',
    'I am worthy of living a life that is true to myself.',
    'I am deserving of good things and positive experiences.',
    'I am capable of making my own decisions and choices.',
    'I am strong and resilient, and I can overcome any obstacle.',
    'I am worthy of taking up space and being seen.',
    'I am deserving of forgiveness and the opportunity to learn and grow.',
    'I am capable of creating meaningful and fulfilling relationships.',
    'I am worthy of living a life that aligns with my values and beliefs.',
    'I am deserving of self-care and self-compassion.',
    'I am capable of setting and achieving my own goals.',
    'I am worthy of living a life of purpose and meaning.',
    'I am deserving of time for relaxation and enjoyment.',
    'I am capable of creating a positive and supportive environment for myself.',
    'I am worthy of living a healthy and fulfilling life.',
    'I am deserving of love and appreciation from myself and others.',
    'I am capable of making a positive difference in the world.',
    'I am worthy of living a life that brings me joy and fulfillment.',
    'I am deserving of a life filled with abundance and prosperity.',
    'I am capable of achieving my dreams and reaching my full potential.',
    'I am intelligent and capable of learning new things.',
    'I am worthy of success and prosperity.',
    'I am confident in my abilities and decisions.',
    'I am capable of overcoming challenges and obstacles.',
    'I am unique and special, and my quirks make me who I am.',
    'I am worthy of respect from myself and others.',
    'I am deserving of a fulfilling and meaningful life.',
    'I am strong and capable of handling difficult emotions.',
    'I am worthy of forgiveness, both from myself and others.',
    'I am a good person, and I treat others with kindness and respect.',
    'I am successful in all that I do.',
    'I am loved and appreciated by those around me.',
    'I am grateful for the present moment and all it has to offer.',
    'I am worthy of receiving abundance in all areas of my life.',
    'I am capable of creating the life I want for myself.',
    'I am deserving of happiness and joy.',
    'I am strong and capable of facing any obstacle.',
    'I am deserving of a healthy and fulfilling relationship.',
    'I am a unique and valuable individual.',
    'I am capable of making positive changes in my life.',
    'I am worthy of receiving love and appreciation from others.',
    'I am deserving of a successful and fulfilling career.',
    'I am confident in my own skin and comfortable with who I am.',
    'I am capable of overcoming adversity and challenges.',
    'I am worthy of respect and admiration.',
    'I am grateful for the blessings and opportunities in my life.',
    'I am deserving of a life filled with love and happiness.',
    'I am capable of achieving greatness.',
    'I am strong and resilient.',
    'I am deserving of a life full of abundance and prosperity.',
    'I am worthy of making my own choices and decisions.',
    'I am confident in my abilities and strengths.',
    'I am deserving of a healthy and fulfilling relationship with myself and others.',
    'I am worthy of living a life full of purpose and meaning.',
    'I am capable of overcoming any challenge and achieving my goals.',
    'I am worthy and deserving of love and respect.',
    'I am capable and competent in all areas of my life.',
    'I am strong and resilient, and I can overcome any challenge.',
    'I am confident in my abilities and trust in my decisions.',
    'I am deserving of success and abundance in all areas of my life.',
    'I am capable of achieving my goals and creating the life I desire.',
    'I am a valuable and unique individual, with my own strengths and talents.',
    'I am constantly learning and growing, and I am open to new experiences.',
    'I am in control of my thoughts and emotions, and I choose to focus on the positive.',
    'I am grateful for the many blessings in my life, and I choose to cultivate a positive attitude.',
    'I am worthy of forgiveness, and I choose to forgive myself for past mistakes.',
    'I am worthy of happiness, and I choose to focus on the things that bring joy to my life.',
    'I am surrounded by love and support, and I am grateful for the relationships in my life.',
    'I am successful in all that I do, and I celebrate my achievements.',
    'I am kind and compassionate towards myself and others.',
    'I am able to overcome any obstacle that comes my way.',
    'I am deserving of a healthy and fulfilling life.',
    'I am capable of creating positive change in the world.',
    'I am proud of who I am and the person I am becoming.',
    'I am strong and capable of handling any situation that arises.',
    'I am confident in my own skin and embrace my unique qualities.',
    'I am proud of my accomplishments and the progress I have made.',
    'I am grateful for the opportunities that come my way and make the most of them.',
    'I am able to overcome adversity and come out stronger on the other side.',
    'I am deserving of a life filled with love and abundance.',
    'I am capable of achieving my dreams and living a fulfilling life.',
    'I am worthy of respect and treat myself with kindness and compassion.',
    'I am strong and capable of overcoming any challenge that comes my way.',
    'I am worthy of love and surround myself with positive and supportive relationships.',
    'I am capable of creating the life I want and achieving my goals.',
    'I am grateful for the many blessings in my life and choose to cultivate a positive attitude.',
    'I am deserving of happiness and focus on the things that bring joy to my life.',
    'I am a unique and valuable individual, with my own strengths and talents.',
    'I am able to create positive change in the world and make a difference.',
    'I am capable and competent in all that I do.',
    'I am successful and achieving my goals.',
    'I am confident and self-assured.',
    'I am grateful for all the blessings in my life.',
    'I am positive and optimistic.',
    'I am talented and skilled.',
    'I am beautiful and worthy of self-care.',
    'I am valued and appreciated by those around me.',
    'I am worthy of forgiveness and I forgive myself.',
    'I am living a fulfilling and meaningful life.',
    'I am empowered to create my own happiness.',
    'I am surrounded by love and support.',
    'I am making a positive impact on the world.',
    'I am constantly growing and improving as a person.',
    'I am worthy of having my needs met.',
    'I am capable of setting and achieving my own personal goals.',
    'I am strong enough to overcome any challenges that come my way.',
    'I am worthy of abundance and prosperity.',
    'I am deserving of a healthy and balanced life.',
    'I am loved and accepted for who I am.',
    'I am worthy of good things happening to me.',
    'I am capable of finding solutions to problems.',
    'I am worthy of having healthy and fulfilling relationships.',
    'I am deserving of a life filled with joy and happiness.',
    'I am grateful for my unique qualities and strengths.',
    'I am worthy of having my own personal space and time.',
    'I am strong and capable of standing up for myself.',
    'I am worthy of pursuing my passions and interests.',
    'I am deserving of a life that aligns with my values and beliefs.',
    'I am capable of self-care and taking care of my own needs.',
    'I am worthy of having a healthy work-life balance.',
    'I am deserving of financial stability and security.',
    'I am capable of setting healthy boundaries.',
    'I am worthy of receiving kindness and compassion from others.',
    'I am deserving of living a life that brings me fulfillment and purpose.',
    'I am enough, just as I am.',
    'I am confident and capable of achieving my goals.',
    'I am deserving of a happy and fulfilling life.',
    'I am worthy of forgiveness, for myself and others.',
    'I am capable of finding joy and happiness in life.',
    'I am worthy of a loving and supportive relationship.',
    'I am deserving of a successful career.',
    'I am worthy of a life filled with purpose and meaning.',
    'I am capable of making a positive impact in the world.',
    'I am worthy of a life filled with love and happiness.',
    'I am deserving of a life filled with opportunities and abundance.',
    'I am capable of achieving my dreams and goals.',
    'I am worthy of a life filled with prosperity and abundance.',
    'I am deserving of a life filled with happiness and joy.',
    'I am capable of achieving success in all areas of my life.',
    'I am worthy of a life filled with love and abundance.',
    'I am deserving of a life filled with prosperity and success.',
    'I am worthy of a life filled with happiness and prosperity.',
    'I am deserving of a life filled with love and success.',
    'I am capable of creating the life I want and deserve.',
    'I am worthy of a life filled with abundance and joy.',
    'I am deserving of a life filled with prosperity and happiness.',
    'I am capable of overcoming any obstacle and achieving my goals.',
    'I am worthy of a life filled with love and prosperity.',
    'I am deserving of a life filled with success and happiness.',
    'I am capable of living a fulfilling and meaningful life.',
    'I am worthy of a life filled with abundance and success.',
    'I am deserving of a life filled with prosperity and love.',
    'I am capable of creating positive change in my life and the world.',
    'I am worthy of a life filled with happiness and success.',
    'I am deserving of a life filled with prosperity and joy.',
    'I am capable of achieving anything I set my mind to.',
    'I am capable of achieving my goals and making my dreams a reality.',
    'I am strong and capable of handling any challenge that comes my way.',
    'I am talented and skilled, and I use my abilities to their full potential.',
    'I am deserving of respect, and I treat myself and others with kindness and compassion.',
    'I am capable of change and growth, and I am constantly improving myself.',
    'I am confident in my own abilities and decisions.',
    'I am unique and special, and I embrace my individuality.',
    'I am a good person, and I make a positive impact on the world.',
    'I am worthy of forgiveness, and I forgive myself for any past mistakes.',
    'I am capable of overcoming any obstacle and achieving success.',
    'I am worthy of a healthy and fulfilling relationship.',
    'I am at peace with who I am and where I am in life.',
    'I am deserving of abundance in all areas of my life.',
    'I am strong and resilient, and I bounce back from setbacks quickly.',
    'I am confident in my own skin and comfortable with myself.',
    'I am a valuable and worthy member of society.',
    'I am in control of my own life and I make positive choices.',
    'I am worthy of financial abundance and prosperity.',
    'I am deserving of good health and well-being.',
    'I am worthy of a supportive and loving community.',
    'I am deserving of a life full of purpose and meaning.',
    'I am capable of creating and maintaining healthy relationships.',
    'I am worthy of making a positive impact on others.',
    'I am deserving of living a life true to my authentic self.',
    'I am capable of overcoming my fears and doubts.',
    'I am worthy of living a life free from stress and anxiety.',
    'I am deserving of a life full of love and positivity.',
    'I am deserving of a life of abundance in all areas.',
    'I am capable of living a life full of joy and happiness.',
    'I am intelligent and capable of achieving my goals.',
    'I am confident in myself and my abilities.',
    'I am deserving of a fulfilling and successful career.',
    'I am a good person and I am doing the best I can.',
    'I am healthy and in control of my well-being.',
    'I am capable of overcoming any challenge that comes my way.',
    'I am grateful for the abundance in my life.',
    'I am surrounded by positivity and love.',
    'I am a unique and special individual.',
    'I am successful in everything I put my mind to.',
    'I am able to let go of the past and move forward with a positive attitude.',
    'I am abundant in all areas of my life.',
    'I am worthy of a happy and healthy relationship.',
    'I am capable of making a positive impact on the world.',
    'I am valuable and deserving of appreciation.',
    'I am constantly learning and growing as a person.',
    'I am appreciated and respected by those around me.',
    'I am able to manifest my desires into reality.',
    'I am confident in my decision-making abilities.',
    'I am at peace with myself and my surroundings.',
    'I am worthy of a life filled with joy and prosperity.',
    'I am deserving of a life filled with abundance and abundance.',
    'I am able to create a positive and fulfilling life for myself.',
    'I am strong and capable of handling any situation that comes my way.',
    'I am worthy of achieving my dreams.',
    'I am able to let go of negative thoughts and embrace positivity.',
    'I am worthy of love and respect.',
    'I am confident in my abilities to succeed.',
    'I am strong and capable of overcoming any obstacle.',
    'I am deserving of a healthy and happy life.',
    'I am in control of my own happiness.',
    'I am loved and valued by those around me.',
    'I am strong and capable of overcoming any challenge.',
    'I am unique and special, with my own set of strengths and abilities.',
    'I am capable of achieving my goals and creating a fulfilling life.',
    'I am worthy of respect and treat myself with kindness.',
    'I am a good person and make positive contributions to the world.',
    'I am deserving of abundance and prosperity in all areas of my life.',
    'I am worthy of forgiveness and give myself permission to make mistakes.',
    'I am loved and supported by those around me.',
    'I am resilient and bounce back from setbacks.',
    'I am capable of learning and growing.',
    'I am deserving of a healthy, fulfilling relationships.',
    'I am a hard worker and committed to continuous improvement.',
    'I am courageous and willing to take risks.',
    'I am worthy of a successful and fulfilling career.',
    'I am deserving of a healthy and balanced lifestyle.',
    'I am a creative and innovative thinker.',
    'I am deserving of a life filled with joy and purpose.',
    'I am worthy of financial security and abundance.',
    'I am surrounded by positivity and abundance.',
    'I am deserving of a healthy body and mind.',
    'I am worthy of a fulfilling and meaningful life.',
    'I am capable of creating the life I want.',
    'I am confident in my ability to make good decisions.',
    'I am worthy of a loving and supportive community.',
    'I am deserving of a life filled with adventure and excitement.',
    'I am worthy of a harmonious and healthy family life.',
    'I am worthy of a successful and fulfilling personal life.',
    'I am capable of creating meaningful change in the world.',
    'I am worthy of a life filled with love and positivity.',
    'I am deserving of a happy and fulfilling home life.',
    'I am deserving of a life filled with good health and well-being.',
    'I am strong and capable of overcoming any challenges that come my way.',
    'I am grateful for the abundance of opportunities in my life.',
    'I am confident in my abilities and make positive choices for myself.',
    'I am capable of creating the life I desire and deserve.',
    'I choose to focus on the good in my life and am thankful for all that I have.',
    'I am in control of my own happiness and am responsible for my own well-being.',
    'I am deserving of a healthy and loving relationship with myself and others.',
    'I am grateful for my strengths and work to improve upon my weaknesses.',
    'I choose to let go of negative thoughts and embrace positivity in my life.',
    'I am confident in my decision-making abilities and trust myself to make the right choices.',
    'I am deserving of a life filled with love, joy, and abundance.',
    'I am capable of creating a positive and fulfilling future for myself.',
    'I am worthy of living a healthy and balanced life.',
    'I am grateful for the support and love of those around me.',
    'I am worthy of forgiveness and work to learn and grow from my mistakes.',
    'I am strong and capable of taking care of myself, both physically and emotionally.',
    'I choose to focus on the present moment and let go of stress and worry about the future.',
    'I am confident in my own skin and embrace my unique qualities and characteristics.',
    'I am deserving of a life filled with purpose and meaning.',
    'I am capable of making a positive impact on the world and those around me.',
    'I am grateful for the many blessings in my life, big and small.',
    'I am worthy of experiencing love and being loved in return.',
    'I am strong and capable of overcoming any obstacles that come my way.',
    'I am confident in my own abilities and work to continually improve and grow.',
    'I am capable of achieving my goals and living my best life.',
    'I am grateful for the present moment and choose to live in the present rather than dwelling on the past or worrying about the future.',
    'I am worthy of making my own choices and creating my own path in life.',
    'I am strong and capable of facing my fears and working towards my goals.',
    'I am confident in my own worth and value as an individual.',
    'I am deserving of living a life that is authentic and true to myself.',
    'I am capable of finding joy and happiness in the simple things in life.',
    'I am grateful for the support and encouragement of those around me.',
    'I am worthy of a life filled with love, happiness, and abundance, and I am grateful for all that I have.',
    'I am strong and capable.',
    'I am in control of my own thoughts and actions.',
    'I am constantly learning and growing.',
    'I am grateful for all the good in my life.',
    'I am deserving of respect.',
    'I am capable of overcoming any challenge.',
    'I am worthy of a fulfilling and happy life.',
    'I am capable of creating the life I desire.',
    'I am successful in my career.',
    'I am grateful for my talents and abilities.',
    'I am worthy of making a positive impact on the world.',
    'I am confident in my decisions.',
    'I am capable of achieving my goals.',
    'I am in control of my own destiny.',
    'I am deserving of a loving and supportive community.',
    'I am grateful for my health and wellness.',
    'I am confident in my appearance and embrace my uniqueness.',
    'I am capable of creating and maintaining healthy habits.',
    'I am successful in my personal relationships.',
    'I am grateful for the opportunities that come my way.',
    'I am worthy of making a difference in the world.',
    'I am confident in my own skin.',
    'I am capable of creating and maintaining healthy boundaries.',
    'I am deserving of a life filled with joy and positivity.',
    'I am successful in my endeavors.',
    'I am grateful for my support system.',
    'I am worthy of self-care and self-love.',
    'I am confident in my ability to communicate effectively.',
    'I am capable of manifesting my desires.',
    'I am deserving of love and respect from others.',
    'I am successful in all aspects of my life.',
    'I am grateful for the many blessings in my life.',
    'I am beautiful inside and out.',
    'I am deserving of success and abundance.',
    'I am capable of overcoming challenges and adversity.',
    'I am worthy of forgiveness and second chances.',
    'I am deserving of a healthy, balanced life.',
    'I am enough just as I am.',
    'I am worthy of making mistakes and learning from them.',
    'I am strong and capable of handling difficult situations.',
    'I am deserving of a fulfilling career and financial stability.',
    'I am capable of creating meaningful relationships.',
    'I am deserving of a healthy and nourishing lifestyle.',
    'I am worthy of setting and achieving my own goals.',
    'I am a good person and I am doing my best.',
    'I am capable of forgiveness and letting go of grudges.',
    'I am worthy of making my own path in life.',
    'I am deserving of a life filled with joy and fulfillment.',
    'I am capable of change and growth.',
    'I am worthy of a life that aligns with my values and beliefs.',
    'I am deserving of a healthy work-life balance.',
    'I am worthy of making positive contributions to the world.',
    'I am capable of managing my emotions and thoughts in a healthy way.',
    'I am worthy of pursuing my passions and hobbies.',
    'I am deserving of a supportive and loving community.',
    'I am capable of building strong, healthy relationships.',
    'I am worthy of taking risks and trying new things.',
    'I am deserving of a life filled with love, laughter, and happiness.',
    'I am worthy of respect and appreciation.',
    'I am capable of creating healthy and meaningful relationships.',
    'I am capable of finding joy and positivity in every situation.',
    'I am worthy of forgiveness and capable of offering it to others.',
    'I am confident and capable of making my own decisions.',
    'I am capable of learning and growing as a person.',
    'I am worthy of experiencing all the good things life has to offer.',
    'I am capable of overcoming any obstacle that comes my way.',
    'I am deserving of love and affection from those around me.',
    'I am worthy of achieving success in all areas of my life.',
    'I am deserving of a life filled with happiness and contentment.',
    'I am capable of finding the strength and courage to face any challenge.',
    'I am worthy of living a life that is authentic and true to myself.',
    'I am deserving of a life filled with love and joy.',
    'I am capable of finding inner peace and happiness within myself.',
    'I am worthy of creating a life that is fulfilling and meaningful.',
    'I am capable of overcoming any fear or insecurity that holds me back.',
    'I am worthy of living a life that is filled with positivity and positivity.',
    'I am deserving of a life that is full of love, happiness, and contentment.',
    'I am capable of finding the courage and strength to pursue my passions and dreams.',
    'I am worthy of living a life that is filled with abundance, prosperity, and success.',
    'I am deserving of a life that is filled with happiness, joy, and fulfillment.',
    'I am capable of finding the motivation and drive to achieve my goals and dreams.',
    'I am worthy of living a life that is filled with love, joy, and abundance.',
    'I am deserving of a life that is full of happiness, prosperity, and success.',
    'I am capable of finding the inner strength and resilience to overcome any challenge that comes my way.',
];

const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * selfAffirmations.length);
    return selfAffirmations[randomIndex];
};

const todaysAffirmation = () => {
    const index = DateTime.now().ordinal % selfAffirmations.length;
    return selfAffirmations[index];
};

export default selfAffirmations;

export { todaysAffirmation, getRandomAffirmation };
