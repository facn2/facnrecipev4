BEGIN;

DROP TABLE IF EXISTS recipe, users cascade;

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  username      VARCHAR(15)   NOT NULL UNIQUE,
  password      VARCHAR(70)   NOT NULL,
  name          VARCHAR(20)   DEFAULT NULL,
  surname       VARCHAR(20)   DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS recipe (
  id            SERIAL        PRIMARY KEY,
  title         VARCHAR(100)  NOT NULL,
  difficulty    TEXT          DEFAULT NULL,
  duration      INTEGER       DEFAULT NULL,
  ingredients   TEXT          NOT NULL,
  procedure     TEXT          NOT NULL,
  cuisine       TEXT          NOT NULL,
  author_id     INTEGER       REFERENCES users(id) ON UPDATE cascade
);

INSERT INTO users (username, password, name, surname, email) VALUES
('admin', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'Facn', 'Admin', 'admin@facn.com'),
('rinoma', '$2a$06$XzaqxfEvjH.LqhNRVngXGeg/KO0/SFK83Sq44g.tMG9FzGfMDIZpW', 'Rinoma', 'Something', 'stefano@rinoma.com'),
('momo', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'Mohammed', 'Something', 'moh@mmed.com'),
('kingkong', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'King', 'Kong', 'king@kong.com'),
('jbond', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'James', 'Bond', 'james@bond.com');

INSERT INTO recipe (title, difficulty, duration, ingredients, procedure, cuisine, author_id) VALUES
('Falafel', 'hard', 20, '1 pound (about 2 cups) dry chickpeas/garbanzo beans - you must start with dry', 'garbanzo, salt, cumin', 'Arabic', 5),
('Sushi', 'hard', 40, 'Salmon or tuna, nori paper, cucumber', 'roll fish in nori paper and you are done', 'Asian', 2),
('Pasta', 'easy', 15, 'Bag of pasta, water, salt', 'Boil water, add 3 tablespoons of salt, add pasta and cook', 'Italian', 3),
('Black beans with lime and coriander rice, fried peppers and tomato salad', 'medium', 30, 'For the beans: one bag of dry black beans (from the nut shop); 2 large sweet oranges; 2 onions', 'For the beans: (Time estimate: 3 hours) rinse dry beans and add them to a large pan; Serve hot', 'Mixed', 4);

COMMIT;
