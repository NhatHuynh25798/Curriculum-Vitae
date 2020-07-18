import React from 'react'

export const H1 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <h1
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const H2 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <h2
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const H3 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <h3
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const H4 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <h4
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const T1 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const T2 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const T3 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const T4 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const B1 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const B2 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}

export const B3 = ({ fontSize, lineHeight, fontWeight, color, children }) => {
  return (
    <span
      style={{
        fontSize,
        lineHeight,
        fontWeight,
        color,
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
  color: 'var(--primary)',
}
