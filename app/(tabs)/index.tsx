import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

/**
 * HomeScreen component displaying the GigShield welcome page.
 * Designed to match the user-uploaded image with high-fidelity styles.
 */
export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Light status bar for the dark blue background */}
      <StatusBar style="light" translucent />
      
      {/* Deep Blue Gradient covering the top portion */}
      <LinearGradient
        colors={['#004771', '#00253B']}
        style={[styles.gradientBackground, { height: height * 0.5 }]}
      />

      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Brand/Header Section */}
          <View style={styles.headerContainer}>
            <View style={styles.logoOuterCircle}>
              <View style={styles.logoInnerCircle}>
                 <Ionicons name="shield" size={32} color="white" />
              </View>
            </View>
            <Text style={styles.brandTitle}>GigShield</Text>
            <Text style={styles.brandSubtitle}>
              Income Protection for Delivery{'\n'}Partners
            </Text>
          </View>

          {/* Main Card Section - Starts below the brand and fills the bottom */}
          <View style={[
            styles.mainCard, 
            { 
              paddingBottom: insets.bottom > 0 ? insets.bottom + 20 : 40,
              minHeight: height * 0.55
            }
          ]}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.mainDescription}>
              GigShield provides seamless income protection tailored for delivery partners. Secure your earnings today.
            </Text>

            {/* List of Key Features */}
            <View style={styles.featuresList}>
              {/* Feature Item 1 */}
              <View style={styles.featureItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#E0F2FF' }]}>
                  <Ionicons name="shield-checkmark-outline" size={24} color="#005B9E" />
                </View>
                <View style={styles.featureTextWrapper}>
                  <Text style={styles.featureTitle}>Verified Partner Only</Text>
                  <Text style={styles.featureSubtitle}>Only registered delivery workers can enroll</Text>
                </View>
              </View>

              {/* Feature Item 2 */}
              <View style={styles.featureItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#FFF2E6' }]}>
                  <FontAwesome6 name="indian-rupee-sign" size={20} color="#FF761E" />
                </View>
                <View style={styles.featureTextWrapper}>
                  <Text style={styles.featureTitle}>Instant Payouts</Text>
                  <Text style={styles.featureSubtitle}>Claims paid directly to your UPI account</Text>
                </View>
              </View>

              {/* Feature Item 3 */}
              <View style={styles.featureItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#E8F1FF' }]}>
                  <Ionicons name="time-outline" size={24} color="#3B82F6" />
                </View>
                <View style={styles.featureTextWrapper}>
                  <Text style={styles.featureTitle}>Auto-Claim</Text>
                  <Text style={styles.featureSubtitle}>No paperwork — triggers fire automatically</Text>
                </View>
              </View>
            </View>

            {/* Primary Action Button */}
            <TouchableOpacity 
              style={styles.ctaButton} 
              activeOpacity={0.85}
              onPress={() => {}}
            >
              <Text style={styles.ctaButtonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={18} color="white" style={styles.ctaIcon} />
            </TouchableOpacity>

            {/* Authentication Link */}
            <View style={styles.signInWrapper}>
              <Text style={styles.alreadyEnrolledLabel}>Already enrolled? </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* Security/Trust Footer */}
            <View style={styles.securityFooter}>
              <Ionicons name="lock-closed" size={12} color="#94A3B8" />
              <Text style={styles.securityText}>Your data is protected and never shared</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerContainer: {
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logoOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoInnerCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 16,
    color: '#E2E8F0',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
    fontWeight: '500',
  },
  mainCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 28,
    paddingTop: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 24,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 12,
  },
  mainDescription: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 23,
    marginBottom: 32,
    fontWeight: '400',
  },
  featuresList: {
    gap: 24,
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTextWrapper: {
    marginLeft: 16,
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  featureSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  ctaButton: {
    backgroundColor: '#FF761E',
    height: 58,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF761E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  ctaIcon: {
    marginLeft: 8,
  },
  signInWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  alreadyEnrolledLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  signInLink: {
    fontSize: 14,
    color: '#005B9E',
    fontWeight: '700',
  },
  securityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  securityText: {
    fontSize: 11,
    color: '#94A3B8',
    marginLeft: 6,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
