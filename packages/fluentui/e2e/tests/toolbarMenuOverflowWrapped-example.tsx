import React from 'react';
import _ from 'lodash';
import { Toolbar, ToolbarItem } from '@fluentui/react';

export const selectors = {
  toolbarItem: ToolbarItem.className,
  toolbar: Toolbar.className,
  toolbarItemWrapper: ToolbarItem.slotClassNames.wrapper
};

export const itemsCount = 20;

const ToolbarExampleOverflowWrapped = () => {
  const icons = ['bold', 'italic', 'underline'];

  const itemData = _.times(itemsCount, i => ({
    key: `b${i}`,
    content: `${icons[i % icons.length]} #${i}`,
    icon: icons[i % icons.length],
    title: `${icons[i % icons.length]} #${i}`,
    // first item and second half of items are wrapped, rest un-wrapped.
    ...((i >= itemsCount / 2 || i === 0) && { menu: [] })
  }));

  const toolbarItems = itemData.map(item => {
    return { ...item, content: undefined };
  });
  const [overflowOpen, setOverflowOpen] = React.useState(false);
  return (
    <Toolbar
      aria-label="Toolbar overflow menu"
      items={toolbarItems}
      overflow
      overflowOpen={overflowOpen}
      overflowItem={{
        title: 'More'
      }}
      onOverflowOpenChange={(e, { overflowOpen }) => {
        setOverflowOpen(overflowOpen);
      }}
      getOverflowItems={startIndex => itemData.slice(startIndex)}
    />
  );
};

export default ToolbarExampleOverflowWrapped;
