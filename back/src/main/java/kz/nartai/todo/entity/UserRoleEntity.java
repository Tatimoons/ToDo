package kz.nartai.todo.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "user_roles", schema = "public")
public class UserRoleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id", nullable = false)
    private RoleEntity role;

    @Column(name = "assigned_at", nullable = false, updatable = false)
    private OffsetDateTime assignedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assigned_by")
    private UserEntity assignedBy;

    protected UserRoleEntity() {
    }

    @PrePersist
    private void onCreate() {
        this.assignedAt = OffsetDateTime.now();
    }

    // id
    public Long getId() {
        return id;
    }

    // user
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    // role
    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }

    // assignedAt
    public OffsetDateTime getAssignedAt() {
        return assignedAt;
    }

    // assignedBy
    public UserEntity getAssignedBy() {
        return assignedBy;
    }

    public void setAssignedBy(UserEntity assignedBy) {
        this.assignedBy = assignedBy;
    }
}
