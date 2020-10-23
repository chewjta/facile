## Approach and Process

1. What in my process and approach to this project would I do differently next time?

- Getting more user feedback from people of different disciplines to suggest new features to be added to the app.

2. What in my process and approach to this project went well that I would repeat next time?

- Great initial planning in drawing wireframes, planning the basic overall architecture, listing out and grouping different and required components and thus the coding process was alot more smooth due to structure clarity.

## Code and Code Design

1. What in my code and program design in the project would I do differently next time?

- Leveraging more on reusable components. As much as I did utilize it, I ended up creating multiple components which are quite similar to one another.

```javascript
Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

//Can just make one component for these 2.
```

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

- By modularizing each components into their separate folders and styling them individually.

```javascript
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
```

## WDI Unit 2 Post Mortem

1. What habits did I use during this unit that helped me?

- Initial planning via drawing wireframes, planning the basic overall architecture, listing out and grouping different and required components etc.
- Always write pseudo code before adding any new components or features.
- Committing to Git regularly to ensure I am able to restore my data in case my app breaks

2. What habits did I have during this unit that I can improve on?

- Use more reusable codes/components
- Talk to more people and get their feedback

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

- The pace is great as we had ample time to prepare for this project.
- Overall instructor and TA are both very helpful and approachable which makes the journey much more bearable.
