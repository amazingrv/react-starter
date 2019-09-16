import React, { Component } from 'react';
import CloseableTabs from '../../lib/components/closeable-tabs';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          tab: 'List',
          component: (
            <div>
              <h1>Your list</h1>
            </div>
          ),
          id: 0,
        },
        {
          tab: 'Item detail 1',
          component: <div>Item details for 1</div>,
          id: 1,
          closeable: true,
        },
        {
          tab: 'Item detail 2',
          component: <div>Item details for 2</div>,
          id: 2,
          closeable: true,
        },
        {
          tab: 'Item detail 3',
          component: <div>Item details for 3</div>,
          id: 3,
          closeable: true,
        },
      ],
      activeIndex: 0,
    };
  }

  addItem = () => {
    const id = new Date().valueOf();
    this.setState(state => ({
      data: state.data.concat({
        tab: `New item ${id}`,
        component: <div>Your new component data for {id.toString()}</div>,
        id: id.toString(),
        closeable: true,
      }),
      activeIndex: state.data.length,
    }));
  };

  handleTabClose = (id, newIndex) => {
    this.setState(state => ({
      data: state.data.filter(item => item.id !== id),
      activeIndex: newIndex,
    }));
  };

  handleTabClick = (id, newIndex) => {
    this.setState({
      activeIndex: newIndex,
    });
  };

  render() {
    const { data, activeIndex } = this.state;
    return (
      <div>
        <button type="button" onClick={this.addItem}>
          Add item
        </button>
        <CloseableTabs
          tabPanelColor="lightgray"
          data={data}
          onCloseTab={this.handleTabClose}
          onTabClick={this.handleTabClick}
          activeIndex={activeIndex}
        />
        <div style={{ padding: '10px' }}>{data[activeIndex].component}</div>
      </div>
    );
  }
}
