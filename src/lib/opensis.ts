/**
 * OpenSIS Integration Service
 * 
 * This file contains the utility functions for integrating with the OpenSIS API.
 * Ensure you set the OPENSIS_API_URL and OPENSIS_API_KEY environment variables.
 */

const OPENSIS_API_URL = process.env.NEXT_PUBLIC_OPENSIS_API_URL || 'https://api.opensis.example.com';

interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    role: 'student' | 'staff';
    email: string;
  };
}

/**
 * Authenticates a student via OpenSIS API
 */
export async function authenticateStudent(email: string, password: string): Promise<AuthResponse> {
  // TODO: Replace with actual OpenSIS API call once endpoints are provided
  // Example integration logic:
  /*
  try {
    const res = await fetch(`${OPENSIS_API_URL}/auth/student/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return {
      success: data.success,
      message: data.message,
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    console.error('OpenSIS Student Auth Error:', error);
    return { success: false, message: 'Failed to connect to OpenSIS server' };
  }
  */

  // Mock implementation for UI demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email && password) {
        // Simulate a successful login for any non-empty input for now
        resolve({
          success: true,
          token: 'mock_token_student_123',
          user: { id: 'STU001', name: 'John Doe', role: 'student', email }
        });
      } else {
        resolve({ success: false, message: 'Please provide both email and password.' });
      }
    }, 1500); // simulate network delay
  });
}

/**
 * Authenticates a staff member via OpenSIS API
 */
export async function authenticateStaff(email: string, password: string): Promise<AuthResponse> {
  // TODO: Replace with actual OpenSIS API call once endpoints are provided
  /*
  try {
    const res = await fetch(`${OPENSIS_API_URL}/auth/staff/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return {
      success: data.success,
      message: data.message,
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    console.error('OpenSIS Staff Auth Error:', error);
    return { success: false, message: 'Failed to connect to OpenSIS server' };
  }
  */

  // Mock implementation for UI demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          success: true,
          token: 'mock_token_staff_456',
          user: { id: 'STAFF001', name: 'Jane Smith', role: 'staff', email }
        });
      } else {
        resolve({ success: false, message: 'Please provide both email and password.' });
      }
    }, 1500); // simulate network delay
  });
}

/**
 * Generic fetch wrapper for authenticated OpenSIS API calls
 */
export async function fetchFromOpenSIS(endpoint: string, options: RequestInit = {}) {
  // Get token from secure storage / cookies in a real app
  const token = typeof window !== 'undefined' ? localStorage.getItem('opensis_token') : null;
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(`${OPENSIS_API_URL}${endpoint}`, {
      ...options,
      headers,
    });
    
    if (!response.ok) {
      throw new Error(`OpenSIS API Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error calling ${endpoint}:`, error);
    throw error;
  }
}
