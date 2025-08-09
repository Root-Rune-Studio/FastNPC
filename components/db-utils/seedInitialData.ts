const seedInitialData = async (db: any) => {
  // Seed genders
  await db.runAsync(`INSERT INTO genders (name) VALUES ('M')`);
  await db.runAsync(`INSERT INTO genders (name) VALUES ('N/A')`);
  await db.runAsync(`INSERT INTO genders (name) VALUES ('F')`);

  // Seed ages
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Child')`);
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Adult')`);
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Elder')`);

  // Seed potencies
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Very Weak', -2)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Weak', -1)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Neutral', 0)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Strong', 1)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Very Strong', 2)`);

  // seed archetypes
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Commoner',
      'Common',
      10, 10, 10, 10, 10, 10,
      'CON'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Thief',
      'Roguish',
      8, 14, 10, 12, 8, 10,
      'DEX'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Hermit',
      'Loner',
      8, 10, 12, 12, 14, 8,
      'WIS'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Priest',
      'Holy',
      8, 8, 12, 10, 12, 14,
      'CHA'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Noble',
      'Annoying',
      10, 8, 12, 14, 10, 12,
      'INT'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Street Urchin',
      'Scrappy Survivor',
      8, 14, 10, 10, 8, 12,
      'DEX'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Gambler',
      'Risk-Taker',
      8, 12, 10, 12, 8, 14,
      'CHA'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Exile',
      'Outcast',
      10, 10, 12, 10, 14, 8,
      'WIS'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Scribe',
      'Knowledge Seeker',
      8, 10, 10, 16, 12, 10,
      'INT'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Hunter',
      'Beast Slayer',
      12, 14, 12, 10, 10, 8,
      'DEX'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Peasant',
      'Hard Worker',
      14, 10, 12, 8, 10, 8,
      'STR'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Witch',
      'Arcane Practitioner',
      8, 8, 10, 12, 12, 14,
      'CHA'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Scoundrel',
      'Devious Trickster',
      10, 14, 10, 12, 8, 12,
      'DEX'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Mercenary',
      'Hired Blade',
      14, 12, 12, 10, 8, 10,
      'STR'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Alchemist',
      'Potion Crafter',
      8, 10, 12, 14, 10, 12,
      'INT'
    )`
  );

  // seed species
  await db.runAsync(`INSERT INTO species (name) VALUES ('Human')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Elf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Dwarf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kenku')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Halfling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Harengon')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Aasimar')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Shadar-kai')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Dragonborn')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tiefling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Gnome')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Half-Elf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Half-Orc')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tabaxi')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Goliath')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Aarakocra')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Firbolg')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Lizardfolk')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Triton')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Genasi')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kobold')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Orc')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Changeling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Warforged')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Hobgoblin')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Goblin')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kalashtar')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Shifter')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Bugbear')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Minotaur')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tortle')`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (1, "I will protect my family from the dangers of the world, no matter the cost.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (1, "My neighbors are my extended family, and I will defend them as fiercely as I would my own kin.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (1, "The land that provides for us is sacred. I will honor it and work to protect it.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (1, "I have a deep love for my simple life and will do anything to preserve the peace of the village.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (1, "I dream of something better, and I will work tirelessly to earn a better future for my children.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (2, "I owe my life to the mentor who taught me the ways of stealth and survival.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (2, "I will never forget those who helped me when I was a street rat.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (2, "The thrill of a heist calls to me, and I&#39;ll never stop chasing that rush.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (2, "I&#39;m loyal to my crew—no one betrays the family.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (2, "I&#39;m always on the lookout for the next big score, and nothing will stand in my way.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (3, "I have left society behind, but the memories of my old life haunt me. I still feel connected to those I&#39;ve left behind.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (3, "I&#39;ve spent years in solitude, but the wisdom I&#39;ve gained can help the world—if only they&#39;ll listen.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (3, "The wilderness is my only true companion, and I&#39;ll protect it fiercely.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (3, "I&#39;m searching for a lost piece of knowledge that could change everything.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (3, "I&#39;ve been betrayed by those I trusted, and I will never let that happen again.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (4, "My faith guides me, and I will do whatever it takes to spread its teachings.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (4, "I&#39;ve sworn to protect the innocent, especially those who have no one else to turn to.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (4, "The church is my family, and I&#39;ll defend it against all enemies.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (4, "I once lost my faith, but now I am more committed than ever to serve the divine.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (4, "I seek redemption for a past mistake, and I will atone for it no matter the sacrifice.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (5, "My family&#39;s legacy is everything, and I&#39;ll ensure its continued dominance.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (5, "I have many enemies, but none can defeat me or my noble house.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (5, "I believe it is my duty to lead the common folk to a better life, even if they don&#39;t understand my intentions.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (5, "I will protect my title and estates at all costs.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (5, "I am haunted by the sins of my ancestors and seek to redeem my family name.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (6, "I&#39;ll never forget the friends I&#39;ve made in the gutters, and I&#39;ll protect them with my life.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (6, "Survival is the only thing that matters. Anyone who stands in my way is a threat.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (6, "I&#39;m constantly looking for the next opportunity to prove I&#39;m better than the world thinks of me.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (6, "The street is my home. I know its rhythms, its dangers, and its rewards.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (6, "I&#39;ve never had a family, but I&#39;ll make sure my found family stays safe.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (7, "I owe everything to my lucky streak, and I&#39;m determined to keep it going.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (7, "I&#39;ve been burned before, but I&#39;ll never stop taking risks.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (7, "There&#39;s nothing more thrilling than a high-stakes wager, and I&#39;ll bet it all.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (7, "I have a debt to pay off, and I&#39;ll gamble my way out of it or die trying.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (7, "The thrill of a game is the only thing that keeps me alive—if I stop gambling, I&#39;ll die inside.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (8, "I was cast out for a reason, but I&#39;ll find a way to return and prove everyone wrong.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (8, "The world owes me for the suffering it&#39;s caused me, and I&#39;ll make it pay.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (8, "I&#39;ve been rejected, but I&#39;ll find my place in the world, no matter how long it takes.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (8, "I seek vengeance against those who forced me out of my homeland.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (8, "I will find acceptance where I can, and I will cherish those who take me in.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (9, "I will preserve the knowledge of the past for future generations.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (9, "Every scroll and tome holds a secret, and I&#39;m determined to unlock them all.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (9, "My words can change the world, and I will write what must be written.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (9, "I seek out forgotten libraries, hoping to find lost knowledge.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (9, "I have a deep respect for history, and I believe it will guide us toward a better future.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (10, "I will hunt down the beast that destroyed my village and seek revenge.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (10, "The wilds are a dangerous place, but they are also my home. I protect them fiercely.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (10, "I hunt not just for food, but for the thrill of the chase.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (10, "I owe my survival to the creatures I&#39;ve learned to track and understand.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (10, "I am driven to hunt the greatest game, to prove I am the best hunter alive.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (11, "The land that feeds me is sacred, and I will protect it from harm.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (11, "I have a family to provide for, and I will work until my bones break to care for them.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (11, "My community is my strength, and I&#39;ll never abandon those who depend on me.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (11, "I dream of a day when my hard work will lead to a better life for my children.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (11, "I will fight to protect my home and way of life, even if it means standing up to the rich and powerful.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (12, "I am connected to the spirits of the earth, and I&#39;ll protect them from harm.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (12, "I will uncover the secrets of the arcane, no matter the cost.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (12, "I made a pact with forces I don&#39;t fully understand, and now I must live with the consequences.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (12, "My magical knowledge must be shared with those who seek it, but not everyone is worthy.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (12, "The power of the elements flows through me, and I will never stop learning its mysteries.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (13, "I&#39;m in it for the coin, but loyalty to my partners is the only thing that keeps me alive.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (13, "The thrill of outsmarting the rich and powerful drives me.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (13, "I have a debt to a powerful figure, and I&#39;ll do anything to pay it off.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (13, "I&#39;ve made enemies, but I never forget a good score, and I always come back for more.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (13, "I&#39;ll lie, cheat, and steal, but I&#39;ll never betray my friends.")`);

  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (14, "I fight for the highest bidder, but my comrades in arms are the only family I need.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (14, "I&#39;ve seen the horrors of war, and I fight to ensure my comrades survive.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (14, "Loyalty is earned, and I give it to those who deserve it.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (14, "I carry the scars of battle, and they are a reminder of my purpose.")`);
  await db.runAsync(`INSERT INTO bonds (archetype_id, description) VALUES (14, "I&#39;ll keep fighting until the job is done, no matter the cost.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (1, "I am too trusting of others, and this often leads to my downfall.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (1, "I struggle with decision-making, and sometimes I waste precious time trying to figure out the best course of action.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (1, "I tend to avoid conflict at all costs, even when confrontation would be necessary.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (1, "I lack ambition and often feel content with things staying the same, even when improvement is possible.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (1, "I&#39;m overly cautious, which sometimes prevents me from seizing opportunities when they arise.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (2, "I am overly confident in my abilities, leading me to underestimate my enemies.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (2, "I can&#39;t resist the temptation of a good score, which makes me act impulsively.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (2, "I can be dismissive of authority figures, which sometimes gets me into trouble.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (2, "I have a tendency to be self-centered, putting my own needs above the safety of others.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (2, "I often act without thinking of the consequences, driven by a need for immediate satisfaction.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (3, "I am often distrustful of others, even when they have no reason to betray me.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (3, "I tend to isolate myself, sometimes pushing away people who could help me.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (3, "I have a deep fear of change and resist anything that threatens my solitude.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (3, "I often get lost in my own thoughts, making it difficult for me to focus on the present moment.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (3, "I sometimes become too focused on my own personal quests, forgetting the needs of those around me.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (4, "I am overly judgmental of others who do not share my faith, often dismissing them as unworthy.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (4, "I sometimes act without thinking, driven by an overwhelming sense of duty rather than reason.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (4, "I have a tendency to preach to others, even when they don&#39;t ask for advice.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (4, "I&#39;m quick to anger when I see someone disrespecting my beliefs.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (4, "I&#39;m not very good at understanding the complexities of the world beyond my faith, often leading to misunderstandings.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (5, "I often find myself thinking I am superior to others because of my noble blood.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (5, "I sometimes forget how fortunate I am and take things for granted.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (5, "I am quick to judge those below me, seeing them as unworthy of my time.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (5, "I let pride cloud my judgment, especially when it comes to family matters.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (5, "I believe too strongly in my bloodline&#39;s legacy, often ignoring what needs to be done in the present.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (6, "I have trouble trusting anyone, especially those who have never struggled like I have.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (6, "I have a tendency to be reckless, often acting without regard for the consequences.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (6, "I sometimes act out of spite, pushing others away when I should be seeking help.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (6, "I don&#39;t deal with authority well, especially when I feel like I&#39;m being treated unfairly.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (6, "I have a constant fear of failure, which makes it hard for me to take risks or try new things.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (7, "I tend to gamble more than I should, often risking more than I can afford to lose.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (7, "I can be obsessive about the thrill of a wager, sometimes losing sight of what&#39;s really important.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (7, "I&#39;m often reckless in my pursuits, jumping into situations without fully considering the consequences.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (7, "I have a bad habit of running from my problems rather than facing them head-on.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (7, "I find it difficult to resist temptation, and this has often led me into trouble.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (8, "I have a deep distrust of others, especially those who come from more privileged backgrounds.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (8, "I struggle to let go of my past, often letting my bitterness cloud my judgment.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (8, "I can be reckless in my actions, often letting my desire for vengeance guide me.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (8, "I have a hard time trusting people who want to help me, pushing them away even when I need them most.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (8, "I tend to lash out at others when I feel threatened, even when they mean me no harm.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (9, "I sometimes become too absorbed in my research, neglecting those around me.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (9, "I have a tendency to be overly critical of others' ideas, thinking my own knowledge is superior.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (9, "I can get lost in my work and forget to take care of myself.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (9, "I tend to be overly cautious, second-guessing myself even when I know I&#39;m right.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (9, "I have a fear of failure, and it often prevents me from taking risks that could lead to greater knowledge.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (10, "I have a deep fear of failure, and sometimes I let it paralyze me in the middle of a hunt.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (10, "I am often overly confident in my abilities, which can lead me to underestimate my prey or situation.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (10, "I sometimes become too fixated on my target, losing track of the bigger picture.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (10, "I struggle to trust others when hunting in a group, preferring to do things alone.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (10, "I can be too competitive, viewing every hunt as a personal challenge rather than a team effort.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (11, "I&#39;m often grumpy and irritable, especially when I feel like I&#39;m not getting the recognition I deserve.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (11, "I have a tendency to procrastinate, waiting until the last minute to get things done.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (11, "I can be stubborn, often refusing to change my plans even when they clearly aren&#39;t working.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (11, "I sometimes lack confidence, second-guessing myself even in situations I know well.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (11, "I&#39;m overly focused on survival, sometimes at the expense of relationships or alliances.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (12, "I&#39;m haunted by a past mistake, and I let it cloud my judgment in every new situation.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (12, "I can be reckless in my pursuit of knowledge, often putting myself in danger for the sake of a theory.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (12, "I&#39;m so focused on gaining power that I&#39;ll step over anyone who gets in my way.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (12, "I have a tendency to view people as tools for my own gain, often overlooking their humanity.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (12, "I sometimes forget to consider the consequences of my actions on others.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (13, "I can be overly ambitious, sometimes taking risks that are not worth the reward.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (13, "I&#39;m often too quick to trust my partners, and they&#39;ve betrayed me in the past.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (13, "I sometimes let my greed get the best of me, risking everything for one last big score.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (13, "I tend to overlook the feelings of others, treating them as tools to achieve my goals.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (13, "I&#39;m constantly paranoid about betrayal, even when there&#39;s no reason to suspect it.")`);

  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (14, "I sometimes struggle to maintain my sense of loyalty, especially when money is involved.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (14, "I can be easily manipulated by those in positions of power, especially when they dangle the right incentives.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (14, "I&#39;m quick to anger in battle, sometimes clouding my judgment in the heat of the moment.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (14, "I often forget the human cost of war, seeing everything as just another job.")`);
  await db.runAsync(`INSERT INTO flaws (archetype_id, description) VALUES (14, "I sometimes struggle with feelings of emptiness, wondering if this life of fighting will ever bring me peace.")`);

}



export default seedInitialData
