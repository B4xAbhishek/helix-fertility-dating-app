import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Switch,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "./Icon";
import styles from "../assets/styles";

const { width } = Dimensions.get("window");

interface FilterOption {
  id: string;
  label: string;
  type: "select" | "multiselect" | "range" | "boolean" | "text";
  options?: string[];
  min?: number;
  max?: number;
  unit?: string;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
}

const filterSections: FilterSection[] = [
  {
    id: "basic",
    title: "Basic Filters",
    options: [
      {
        id: "ageRange",
        label: "Age Range",
        type: "range",
        min: 18,
        max: 80,
        unit: "years",
      },
      {
        id: "distance",
        label: "Distance",
        type: "range",
        min: 1,
        max: 100,
        unit: "miles",
      },
      {
        id: "height",
        label: "Height",
        type: "range",
        min: 4,
        max: 7,
        unit: "feet",
      },
    ],
  },
  {
    id: "reproductive",
    title: "Reproductive Intent",
    options: [
      {
        id: "searchingFor",
        label: "Searching for",
        type: "multiselect",
        options: ["egg", "sperm", "coParent", "relationship", "marriage", "any"],
      },
      {
        id: "lookingFor",
        label: "Looking for",
        type: "multiselect",
        options: ["donorBank", "directDonor", "coParentChild", "relationshipChild", "marriageChild", "any"],
      },
    ],
  },
  {
    id: "genetic",
    title: "Genetic Compatibility",
    options: [
      {
        id: "bloodType",
        label: "Blood Type",
        type: "multiselect",
        options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      },
      {
        id: "recessiveTraits",
        label: "Recessive Traits",
        type: "multiselect",
        options: ["Cystic Fibrosis", "Sickle Cell", "Tay-Sachs", "Hemochromatosis", "None"],
      },
      {
        id: "fertilityIndicators",
        label: "Fertility Indicators",
        type: "multiselect",
        options: ["Normal", "PCOS", "Endometriosis", "Low Sperm Count", "Other"],
      },
    ],
  },
  {
    id: "donor",
    title: "Donor Preferences",
    options: [
      {
        id: "isDonor",
        label: "Is a donor",
        type: "boolean",
      },
      {
        id: "donorType",
        label: "Donor type",
        type: "multiselect",
        options: ["egg", "sperm"],
      },
      {
        id: "isSeekingDonor",
        label: "Is seeking donor",
        type: "boolean",
      },
      {
        id: "seekingDonorType",
        label: "Seeking donor type",
        type: "multiselect",
        options: ["egg", "sperm"],
      },
      {
        id: "coParentingInterest",
        label: "Co-parenting interest",
        type: "boolean",
      },
    ],
  },
  {
    id: "children",
    title: "Children",
    options: [
      {
        id: "hasChildren",
        label: "Has children",
        type: "boolean",
      },
      {
        id: "wantsChildren",
        label: "Wants children",
        type: "boolean",
      },
      {
        id: "wantsMoreChildren",
        label: "Wants more children",
        type: "boolean",
      },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    options: [
      {
        id: "religion",
        label: "Religion",
        type: "multiselect",
        options: ["Christian", "Jewish", "Muslim", "Hindu", "Buddhist", "Atheist", "Agnostic", "Spiritual", "Other"],
      },
      {
        id: "smoking",
        label: "Smoking",
        type: "boolean",
      },
      {
        id: "drinking",
        label: "Drinking",
        type: "multiselect",
        options: ["Never", "Rarely", "Socially", "Regularly", "Heavily"],
      },
      {
        id: "drugs",
        label: "Drugs",
        type: "boolean",
      },
    ],
  },
];

interface FiltersProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: Record<string, any>) => void;
  initialFilters?: Record<string, any>;
}

const Filters = ({ visible, onClose, onApply, initialFilters = {} }: FiltersProps) => {
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters);

  const handleFilterChange = (filterId: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterId]: value,
    }));
  };

  const renderFilterOption = (option: FilterOption) => {
    const value = filters[option.id];

    switch (option.type) {
      case "select":
        return (
          <View key={option.id} style={localStyles.optionContainer}>
            <Text style={localStyles.optionLabel}>{option.label}</Text>
            <View style={localStyles.selectContainer}>
              {option.options?.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    localStyles.optionButton,
                    value === opt && localStyles.selectedOption,
                  ]}
                  onPress={() => handleFilterChange(option.id, opt)}
                >
                  <Text style={[
                    localStyles.optionText,
                    value === opt && localStyles.selectedOptionText,
                  ]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case "multiselect":
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <View key={option.id} style={localStyles.optionContainer}>
            <Text style={localStyles.optionLabel}>{option.label}</Text>
            <View style={localStyles.selectContainer}>
              {option.options?.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    localStyles.optionButton,
                    selectedValues.includes(opt) && localStyles.selectedOption,
                  ]}
                  onPress={() => {
                    const newValues = selectedValues.includes(opt)
                      ? selectedValues.filter(v => v !== opt)
                      : [...selectedValues, opt];
                    handleFilterChange(option.id, newValues);
                  }}
                >
                  <Text style={[
                    localStyles.optionText,
                    selectedValues.includes(opt) && localStyles.selectedOptionText,
                  ]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case "range":
        return (
          <View key={option.id} style={localStyles.optionContainer}>
            <Text style={localStyles.optionLabel}>{option.label}</Text>
            <View style={localStyles.rangeContainer}>
              <TextInput
                style={localStyles.rangeInput}
                placeholder={`Min ${option.unit}`}
                value={value?.min?.toString()}
                onChangeText={(text) => {
                  const numValue = parseInt(text) || 0;
                  handleFilterChange(option.id, {
                    ...value,
                    min: numValue,
                  });
                }}
                keyboardType="numeric"
              />
              <Text style={localStyles.rangeSeparator}>to</Text>
              <TextInput
                style={localStyles.rangeInput}
                placeholder={`Max ${option.unit}`}
                value={value?.max?.toString()}
                onChangeText={(text) => {
                  const numValue = parseInt(text) || 0;
                  handleFilterChange(option.id, {
                    ...value,
                    max: numValue,
                  });
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
        );

      case "boolean":
        return (
          <View key={option.id} style={localStyles.booleanContainer}>
            <Text style={localStyles.optionLabel}>{option.label}</Text>
            <Switch
              value={value}
              onValueChange={(val) => handleFilterChange(option.id, val)}
            />
          </View>
        );

      case "text":
        return (
          <View key={option.id} style={localStyles.optionContainer}>
            <Text style={localStyles.optionLabel}>{option.label}</Text>
            <TextInput
              style={localStyles.textInput}
              placeholder={`Enter ${option.label.toLowerCase()}`}
              value={value}
              onChangeText={(text) => handleFilterChange(option.id, text)}
            />
          </View>
        );

      default:
        return null;
    }
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({});
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={localStyles.container}>
        <View style={localStyles.header}>
          <TouchableOpacity onPress={onClose} style={localStyles.closeButton}>
            <Icon name="close" color="#000" size={24} />
          </TouchableOpacity>
          <Text style={localStyles.headerTitle}>Filters</Text>
          <TouchableOpacity onPress={handleReset} style={localStyles.resetButton}>
            <Text style={localStyles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={localStyles.content}>
          {filterSections.map((section) => (
            <View key={section.id} style={localStyles.section}>
              <Text style={localStyles.sectionTitle}>{section.title}</Text>
              {section.options.map(renderFilterOption)}
            </View>
          ))}
        </ScrollView>

        <View style={localStyles.footer}>
          <TouchableOpacity style={localStyles.applyButton} onPress={handleApply}>
            <Text style={localStyles.applyButtonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  resetButton: {
    padding: 5,
  },
  resetButtonText: {
    fontSize: 16,
    color: "#007AFF",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 15,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
  selectContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
  },
  selectedOption: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  selectedOptionText: {
    color: "#FFFFFF",
  },
  rangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rangeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  rangeSeparator: {
    fontSize: 16,
    color: "#666",
  },
  booleanContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  applyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default Filters;
