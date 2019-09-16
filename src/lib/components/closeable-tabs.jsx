/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';

const CloseableTabs = styled.div`
  margin: 10px;
`;
const TabPanel = styled.div`
  padding: 10px 10px 0;
  background: ${props => props.tabPanelColor || '#f2f2f2'};
  display: flex;
  flex-wrap: wrap;
  button.tab {
    border: none;
    background: none;
    display: inline-flex;
    vertical-align: middle;
    padding: 4px 10px;
    min-height: 30px;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &.active {
      border-bottom: 2px solid
        ${props => (props.theme.primary ? props.theme.primary : '#00f')};
    }
    .closeTab {
      width: 20px;
      background: none;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      position: relative;
      font-size: 0;
      border-radius: 30px;
      opacity: 0.6;
      &:hover {
        opacity: 0.6;
        background: #fff;
      }
      &:after,
      &:before {
        content: '';
        display: block;
        width: 12px;
        height: 3px;
        position: absolute;
        left: 4px;
        top: 8px;
        background: #333;
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;
class ReactCloseableTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      activeIndex: this.props.activeIndex || 0,
      identifier: this.props.identifier || 'id',
    };
  }

  handleTabClick = (id, index) => {
    this.props.onBeforeTabClick &&
      this.props.onBeforeTabClick(id, index, this.state.activeIndex);
    this.setState({ activeIndex: index }, () => {
      this.props.onTabClick &&
        this.props.onTabClick(id, index, this.state.activeIndex);
    });
  };

  closeTab = (e, id) => {
    e.stopPropagation();
    const activeId = this.state.data[this.state.activeIndex][
      this.state.identifier
    ];
    const newIndex =
      activeId === id ? this.state.activeIndex - 1 : this.state.activeIndex;
    this.props.onCloseTab && this.props.onCloseTab(id, newIndex);
    this.setState(state => ({
      data: state.data.filter(item => item.id !== id),
      activeIndex: newIndex,
    }));
  };

  render() {
    const { data, activeIndex } = this.state;
    const _this = this;
    return React.createElement(
      CloseableTabs,
      {
        className: this.props.mainClassName || '',
      },
      React.createElement(
        TabPanel,
        {
          tabPanelColor: this.props.tabPanelColor,
          className: this.props.tabPanelClass || '',
        },
        data.map((item, i) => {
          // eslint-disable-next-line react/button-has-type
          return React.createElement(
            'button',
            {
              className: 'tab '.concat(i === activeIndex ? 'active' : ''),
              onClick: function onClick() {
                return _this.handleTabClick(item.id, i);
              },
              key: item.id || i,
            },
            item.tab,
            item.closeable &&
              React.createElement(
                'a',
                {
                  className: 'closeTab',
                  title: _this.props.closeTitle || 'Close tab',
                  onClick: function onClick(e) {
                    return _this.closeTab(e, item.id);
                  },
                },
                _this.props.renderClose ? _this.props.renderClose() : 'X'
              )
          );
        })
      )
    );
  }
}

export default ReactCloseableTabs;
