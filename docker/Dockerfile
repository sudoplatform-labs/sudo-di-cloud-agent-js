ARG base_image
FROM $base_image

USER root

# Install the `oid4vc` plugin, which includes the `sd_jwt_vc` plugin.
ARG plugin_repo
ARG plugin_tag
# Install the `oid4vc` plugin, which includes the `sd_jwt_vc` plugin.
RUN pip install "git+${plugin_repo}@${plugin_tag}#subdirectory=oid4vc"
# Install the `cheqd` plugin
RUN pip install "git+${plugin_repo}@${plugin_tag}#subdirectory=cheqd"
# Install the `connections` plugin
RUN pip install "git+${plugin_repo}@${plugin_tag}#subdirectory=connections"

# Install `jsonpointer` which is an extra dependency needed by the `sd_jwt_vc` plugin.
RUN pip install jsonpointer

# Install `bbs` which is an optional dependency required for support of BBS crypto
RUN pip install ursa_bbs_signatures

USER $user

CMD ["ACA-Py"]
