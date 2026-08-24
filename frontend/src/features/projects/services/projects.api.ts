import { useQuery } from "@tanstack/react-query";
import type { Project } from "@/features/projects/types/project";
import { api } from "@/lib/api/axiosInstance";
import type { QueryResponse } from "@/lib/api/queryTypes";

const projectsEndpoint = "/v1/projects";

export const useGetAllProjects = ({isFeatured}: {isFeatured?: boolean}) => {
  return useQuery({
    queryKey: ["all-projects", isFeatured],
    queryFn: async () => {
      const filterParams = new URLSearchParams({})
      if(isFeatured) filterParams.append("featured", "true")
      const response = await api.get<QueryResponse<Project[]>>(
        `${projectsEndpoint}?${filterParams}`,
        { noToast: true },
      );
      return response.data.data;
    },
  });
};

export const useGetProjectBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["project-details", slug],
    queryFn: async () => {
      const response = await api.get<QueryResponse<Project>>(
        `${projectsEndpoint}/${encodeURIComponent(slug)}`,
        { noToast: true },
      );
      return response.data.data;
    },
    enabled: Boolean(slug),
  });
};
