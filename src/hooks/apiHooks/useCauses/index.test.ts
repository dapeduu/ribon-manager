import { renderHook } from "@testing-library/react-hooks";
import causesApi from "services/api/causesApi";
import useCauses from ".";

jest.mock("hooks/useLanguage", () => ({
  useLanguage: () => ({ currentLang: "en" }),
}));

describe("useCauses", () => {
  let hook: ReturnType<typeof useCauses>;
  let currentLang: string;

  beforeEach(() => {
    const { result } = renderHook(() => useCauses());
    hook = result.current;
    currentLang = "en";
  });

  describe("#getCause", () => {
    beforeEach(() => {
      causesApi.getCause = jest.fn(() => ({} as any));
    });

    it("calls getCause with correct params", () => {
      const id = "1";
      hook.getCause(id);

      expect(causesApi.getCause).toHaveBeenCalledWith(id, currentLang);
    });
  });

  describe("#getAllCauses", () => {
    beforeEach(() => {
      causesApi.getCausesList = jest.fn(() => ({} as any));
    });

    it("calls getCause with correct params", () => {
      hook.getCauses();

      expect(causesApi.getCausesList).toHaveBeenCalled();
    });
  });

  describe("#createCause", () => {
    const data = {
      name: "Cause 1",
    };

    beforeEach(() => {
      causesApi.createCause = jest.fn(() => ({} as any));
    });

    it("calls createCause with correct params", () => {
      hook.createCause(data);

      expect(causesApi.createCause).toHaveBeenCalled();
      expect(causesApi.createCause).toHaveBeenCalledWith(data, currentLang);
    });
  });

  describe("#updateCause", () => {
    const data = {
      id: 1,
      name: "Cause 1",
    };

    beforeEach(() => {
      causesApi.updateCause = jest.fn(() => ({} as any));
    });

    it("calls updateCause with correct params", () => {
      hook.updateCause(data);

      expect(causesApi.updateCause).toHaveBeenCalled();
      expect(causesApi.updateCause).toHaveBeenCalledWith(
        data.id,
        data,
        currentLang,
      );
    });
  });
});
