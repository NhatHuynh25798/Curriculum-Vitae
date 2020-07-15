import React from 'react'

export const H1 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <h1
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </h1>
  )
}

H1.defaultProps = {
  fontSize: '3rem',
  lineHeight: '3rem',
  fontWeight: '700',
}

export const H2 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <h2
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </h2>
  )
}

H2.defaultProps = {
  fontSize: '1.75rem',
  lineHeight: '3rem',
  fontWeight: '600',
}

export const H3 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <h3
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </h3>
  )
}

H3.defaultProps = {
  fontSize: '1.5rem',
  lineHeight: '2.25rem',
  fontWeight: '600',
}

export const H4 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <h4
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </h4>
  )
}

H4.defaultProps = {
  fontSize: '1.25rem',
  lineHeight: '1.875rem',
  fontWeight: '600',
}

export const T1 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

T1.defaultProps = {
  fontSize: '1.25rem',
  lineHeight: '1.875rem',
  fontWeight: '500',
}

export const T2 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

T2.defaultProps = {
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  fontWeight: '500',
}

export const T3 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

T3.defaultProps = {
  fontSize: '1rem',
  lineHeight: '1.33rem',
  fontWeight: '500',
}

export const T4 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

T4.defaultProps = {
  fontSize: '0.75rem',
  lineHeight: '1.33rem',
  fontWeight: '500',
}

export const B1 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

B1.defaultProps = {
  fontSize: '1rem',
  lineHeight: '1.33rem',
  fontWeight: '600',
}

export const B2 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

B2.defaultProps = {
  fontSize: '0.75rem',
  lineHeight: '1.3125rem',
  fontWeight: '700',
}

export const B3 = ({ fontSize, lineHeight, fontWeight, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {children}
    </span>
  )
}

B3.defaultProps = {
  fontSize: '0.875rem',
  lineHeight: '1.3125rem',
  fontWeight: '700',
}
