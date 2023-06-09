import React from 'react';

export default function reactToString(element: React.ReactElement): string[] {
  const nodes: string[] = [];
  const recursion = elmt => {
    React.Children.forEach(elmt.props.children, child => {
      if (React.isValidElement(child)) {
        recursion(child);
      } else if (typeof child === 'string') {
        nodes.push(child);
      }
    });
  };

  recursion(element);
  return nodes;
}
