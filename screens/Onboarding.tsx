import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../assets/styles";

const { width, height } = Dimensions.get("window");

interface OnboardingStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  fields: OnboardingField[];
}

interface OnboardingField {
  id: string;
  type: "text" | "select" | "multiselect" | "boolean" | "number";
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface OnboardingProps {
  onComplete?: () => void;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "basic",
    title: "Tell us about yourself",
    subtitle: "Let's start with the basics",
    description: "Help us create your perfect profile",
    icon: "person",
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        id: "age",
        type: "number",
        label: "Age",
        placeholder: "Enter your age",
        required: true,
      },
      {
        id: "location",
        type: "text",
        label: "Location",
        placeholder: "City, State/Country",
        required: true,
      },
    ],
  },
  {
    id: "reproductive",
    title: "What are you looking for?",
    subtitle: "Help us understand your goals",
    description: "This helps us find better matches for you",
    icon: "heart",
    fields: [
      {
        id: "searchingFor",
        type: "select",
        label: "I am searching for",
        options: ["egg", "sperm", "coParent", "relationship", "marriage", "any"],
        required: true,
      },
      {
        id: "lookingFor",
        type: "select",
        label: "I am looking for",
        options: ["donorBank", "directDonor", "coParentChild", "relationshipChild", "marriageChild", "any"],
        required: true,
      },
    ],
  },
  {
    id: "genetic",
    title: "Genetic Information",
    subtitle: "Optional but recommended",
    description: "This helps ensure genetic compatibility",
    icon: "medical",
    fields: [
      {
        id: "bloodType",
        type: "select",
        label: "Blood Type",
        options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"],
      },
      {
        id: "recessiveTraits",
        type: "multiselect",
        label: "Recessive Carrier Traits",
        options: ["Cystic Fibrosis", "Sickle Cell", "Tay-Sachs", "Hemochromatosis", "None"],
      },
      {
        id: "fertilityIndicators",
        type: "multiselect",
        label: "Fertility Indicators",
        options: ["Normal", "PCOS", "Endometriosis", "Low Sperm Count", "Other"],
      },
    ],
  },
  {
    id: "donor",
    title: "Donor Preferences",
    subtitle: "Are you a donor or seeking one?",
    description: "This helps match you with the right people",
    icon: "gift",
    fields: [
      {
        id: "isDonor",
        type: "boolean",
        label: "I am a donor",
      },
      {
        id: "donorType",
        type: "select",
        label: "Donor Type",
        options: ["egg", "sperm"],
      },
      {
        id: "isSeekingDonor",
        type: "boolean",
        label: "I am seeking a donor",
      },
      {
        id: "seekingDonorType",
        type: "select",
        label: "Seeking Donor Type",
        options: ["egg", "sperm"],
      },
      {
        id: "coParentingInterest",
        type: "boolean",
        label: "Interested in co-parenting",
      },
    ],
  },
  {
    id: "children",
    title: "Family Plans",
    subtitle: "Tell us about your family",
    description: "This helps us understand your family goals",
    icon: "people",
    fields: [
      {
        id: "hasChildren",
        type: "boolean",
        label: "Do you have children?",
      },
      {
        id: "numberOfChildren",
        type: "number",
        label: "Number of children",
        placeholder: "0",
      },
      {
        id: "wantsChildren",
        type: "boolean",
        label: "Do you want children?",
      },
      {
        id: "wantsMoreChildren",
        type: "boolean",
        label: "Do you want more children?",
      },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    subtitle: "Tell us about your lifestyle",
    description: "This helps us find compatible matches",
    icon: "leaf",
    fields: [
      {
        id: "height",
        type: "text",
        label: "Height",
        placeholder: "e.g., 5'10\"",
      },
      {
        id: "religion",
        type: "text",
        label: "Religion",
        placeholder: "e.g., Christian, Jewish, Agnostic",
      },
      {
        id: "smoking",
        type: "boolean",
        label: "Do you smoke?",
      },
      {
        id: "drinking",
        type: "select",
        label: "Drinking habits",
        options: ["Never", "Rarely", "Socially", "Regularly", "Heavily"],
      },
      {
        id: "drugs",
        type: "boolean",
        label: "Do you use drugs?",
      },
    ],
  },
];

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [fadeAnim] = useState(new Animated.Value(1));

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const renderField = (field: OnboardingField) => {
    const value = formData[field.id];

    switch (field.type) {
      case "text":
      case "number":
        return (
          <View style={localStyles.fieldContainer}>
            <Text style={localStyles.fieldLabel}>
              {field.label}
              {field.required && <Text style={localStyles.required}> *</Text>}
            </Text>
            <TextInput
              style={localStyles.input}
              placeholder={field.placeholder}
              value={value}
              onChangeText={(text) => handleFieldChange(field.id, text)}
              keyboardType={field.type === "number" ? "numeric" : "default"}
              placeholderTextColor="#999"
            />
          </View>
        );

      case "select":
        return (
          <View style={localStyles.fieldContainer}>
            <Text style={localStyles.fieldLabel}>
              {field.label}
              {field.required && <Text style={localStyles.required}> *</Text>}
            </Text>
            <View style={localStyles.selectContainer}>
              {field.options?.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    localStyles.option,
                    value === option && localStyles.selectedOption,
                  ]}
                  onPress={() => handleFieldChange(field.id, option)}
                >
                  <Text style={[
                    localStyles.optionText,
                    value === option && localStyles.selectedOptionText,
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case "multiselect":
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <View style={localStyles.fieldContainer}>
            <Text style={localStyles.fieldLabel}>
              {field.label}
              {field.required && <Text style={localStyles.required}> *</Text>}
            </Text>
            <View style={localStyles.selectContainer}>
              {field.options?.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    localStyles.option,
                    selectedValues.includes(option) && localStyles.selectedOption,
                  ]}
                  onPress={() => {
                    const newValues = selectedValues.includes(option)
                      ? selectedValues.filter(v => v !== option)
                      : [...selectedValues, option];
                    handleFieldChange(field.id, newValues);
                  }}
                >
                  <Text style={[
                    localStyles.optionText,
                    selectedValues.includes(option) && localStyles.selectedOptionText,
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case "boolean":
        return (
          <View style={localStyles.booleanContainer}>
            <Text style={localStyles.booleanLabel}>{field.label}</Text>
            <Switch
              value={value}
              onValueChange={(val) => handleFieldChange(field.id, val)}
              trackColor={{ false: "#E5E5E5", true: "#FF6B6B" }}
              thumbColor={value ? "#FFFFFF" : "#FFFFFF"}
            />
          </View>
        );

      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentStep(currentStep + 1);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    } else {
      // Complete onboarding
      console.log("Onboarding complete:", formData);
      // Call the onComplete callback
      onComplete?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentStep(currentStep - 1);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <View style={localStyles.container}>
      {/* Header */}
      <View style={localStyles.header}>
        <View style={localStyles.progressContainer}>
          <Text style={localStyles.progressText}>
            Step {currentStep + 1} of {onboardingSteps.length}
          </Text>
          <View style={localStyles.progressBar}>
            <View 
              style={[
                localStyles.progressFill, 
                { width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }
              ]} 
            />
          </View>
        </View>
      </View>

      {/* Content */}
      <Animated.View style={[localStyles.content, { opacity: fadeAnim }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Icon and Title */}
          <View style={localStyles.titleContainer}>
            <View style={localStyles.iconContainer}>
              <Ionicons name={currentStepData.icon as any} color="#FF6B6B" size={32} />
            </View>
            <Text style={localStyles.title}>{currentStepData.title}</Text>
            <Text style={localStyles.subtitle}>{currentStepData.subtitle}</Text>
            <Text style={localStyles.description}>{currentStepData.description}</Text>
          </View>

          {/* Fields */}
          <View style={localStyles.fieldsContainer}>
            {currentStepData.fields.map((field) => renderField(field))}
          </View>
        </ScrollView>
      </Animated.View>

      {/* Footer */}
      <View style={localStyles.footer}>
        {currentStep > 0 && (
          <TouchableOpacity style={localStyles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" color="#FF6B6B" size={20} />
            <Text style={localStyles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity style={localStyles.nextButton} onPress={handleNext}>
          <Text style={localStyles.nextButtonText}>
            {currentStep === onboardingSteps.length - 1 ? "Complete" : "Next"}
          </Text>
          <Ionicons name="arrow-forward" color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  progressContainer: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: 4,
    backgroundColor: "#FF6B6B",
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    lineHeight: 22,
  },
  fieldsContainer: {
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  required: {
    color: "#FF6B6B",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#000",
  },
  selectContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
    minWidth: 100,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#FF6B6B",
    borderColor: "#FF6B6B",
  },
  optionText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  selectedOptionText: {
    color: "#FFFFFF",
  },
  booleanContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 4,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
  },
  booleanLabel: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 25,
    backgroundColor: "#F8F8F8",
  },
  backButtonText: {
    fontSize: 16,
    color: "#FF6B6B",
    fontWeight: "600",
    marginLeft: 8,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nextButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    marginRight: 8,
  },
});

export default Onboarding;
