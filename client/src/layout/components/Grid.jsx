import React from 'react';
import { Col } from 'react-flexbox-grid';

export const Col1 = props => (
  <Col lg={1} md={1} sm={1} xs={1} {...props}>{props.children}</Col>
);

export const Col2 = props => (
  <Col lg={2} md={2} sm={6} xs={12} {...props}>{props.children}</Col>
);

export const Col3 = props => (
  <Col lg={3} md={3} sm={4} xs={12} {...props}>{props.children}</Col>
);

export const Col4 = props => (
  <Col lg={4} md={4} sm={6} xs={12} {...props}>{props.children}</Col>
);

export const Col44 = props => (
  <Col lg={4} md={4} sm={4} xs={4} {...props}>{props.children}</Col>
);

export const Col5 = props => (
  <Col lg={5} md={5} sm={6} xs={12} {...props}>{props.children}</Col>
);

export const Col55 = props => (
  <Col lg={5} md={5} sm={5} xs={5} {...props}>{props.children}</Col>
);

export const Col6 = props => (
  <Col lg={6} md={6} sm={6} xs={12} {...props}>{props.children}</Col>
);

export const Col7 = props => (
  <Col lg={7} md={7} sm={6} xs={12} {...props}>{props.children}</Col>
);

export const Col8 = props => (
  <Col lg={8} md={8} sm={8} xs={12} {...props}>{props.children}</Col>
);

export const Col9 = props => (
  <Col lg={9} md={9} sm={9} xs={12} {...props}>{props.children}</Col>
);

export const Col10 = props => (
  <Col lg={10} md={10} sm={10} xs={12} {...props}>{props.children}</Col>
);

export const Col11 = props => (
  <Col lg={10} md={10} sm={10} xs={11} {...props}>{props.children}</Col>
);

export const Col12 = props => (
  <Col lg={12} md={12} sm={12} xs={12} {...props}>{props.children}</Col>
);

export const ColDate = props => (
  <Col lg={6} md={6} sm={6} xs={6} {...props}>
    {' '}
    {props.children}
    {' '}
  </Col>
);

export const ColToogle = props => (
  <Col lg={3} md={3} sm={3} xs={6} {...props}>{props.children}</Col>
);
