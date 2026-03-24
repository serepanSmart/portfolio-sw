import { SKILL_CATEGORIES } from '@/data';
import { Section, SkillBar } from '@/components/ui';
import styles from './skills.module.css';

// "The Force is strong with this one." — Vader

export const Skills = (): React.JSX.Element => (
  <Section id="skills">
    <div className={styles.grid}>
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.icon}>{category.icon}</span>
            <h3 className={styles.cardTitle}>{category.title}</h3>
          </div>
          <div className={styles.skills}>
            {category.skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
